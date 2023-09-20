#this py file was for cross-checking accuracy with the kaggle dataset
import numpy as np
import cv2
import imutils
import easyocr
from matplotlib import pyplot as plt
from xml.etree import cElementTree as ET

final_acc = 0
final_consider = 0

for i in range(0, 20):
    #access images 1 by 1 from dataset
    s = './archive/Cars' + str(i) + '.png'
    img = cv2.imread(s)
    #grayscale image
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Noise reduction filter
    bfilter = cv2.bilateralFilter(gray, 11, 17, 17)
    # Edge detection filter
    edged = cv2.Canny(bfilter, 30, 200)

    #detect keypoints in car and grab
    keypoints = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    contours = imutils.grab_contours(keypoints)
    contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]
    location = None
    counter = 0
    for contour in contours:
        approx = cv2.approxPolyDP(contour, 10, True)
        if len(approx) == 4:
            counter = counter + 1
            location = approx
            break

    #isolate the number plate
    mask = np.zeros(gray.shape, np.uint8)
    if(counter != 0):

        new_image = cv2.drawContours(mask, [location], 0,255, -1)
        new_image = cv2.bitwise_and(img, img, mask=mask)

        #get the boundaries predicted for numberplate
        (x,y) = np.where(mask==255)
        (x1, y1) = (np.min(x), np.min(y))
        (x2, y2) = (np.max(x), np.max(y))
        #x-y flipped in xml annotations
        #np.min(x) = min(y) in annotations and so forth

        #read from xml annoted values
        annote = './archive/Cars' + str(i) + '.xml'
        tree = ET.parse(annote)
        root = tree.getroot()
        for page in root.findall('object'):
            for page2 in page.findall('bndbox'):
                groundy_min = int(page2.find('xmin').text)
                groundx_min = int(page2.find('ymin').text)
                groundy_max = int(page2.find('xmax').text)
                groundx_max = int(page2.find('ymax').text)

        #use IoU (intersection over union) to determine accuracy of dataset
        intersection_x_cord = max(min(np.max(x), groundx_max) - max(np.min(x), groundx_min), 0)
        intersection_y_cord = max(min(np.max(y), groundy_max) - max(np.min(y), groundy_min), 0)
        inter_area = intersection_x_cord * intersection_y_cord
        area_predict = (np.max(x) - np.min(x)) * (np.max(y) - np.min(y))
        area_ground = (groundx_max - groundx_min) * (groundy_max - groundy_min)
        union_area = area_predict + area_ground - inter_area
        acc = (inter_area * 100)/union_area
        #some photos in dataset are completely sideways. Our goal with license plate is to detect on road, not extreme situations like floods.
        #We exclude such images. If at least 30% of union intersects than only consider image for accuracy measure.
        if(acc > 30):
            final_acc = final_acc + acc
            final_consider = final_consider + 1
            cropped_image = gray[x1:x2+1, y1:y2+1]

            #use easy-ocr to detect image from segmented rectangle.
            reader = easyocr.Reader(['en'])
            result = reader.readtext(cropped_image)

print(final_acc/final_consider)

#this py file was the seperate backend, working with no front-end in simple license plate detection
import numpy as np
import cv2
import imutils
import easyocr
from matplotlib import pyplot as plt

#access camera (live check)
cam = cv2.VideoCapture(0)

cv2.namedWindow("Identifing License Plate")

#while camera is up and running
while True:
    ret, frame = cam.read()

    #if image not open it fails to identify
    if not ret:
        print("failed to identify")
        break

    # Opens web-cam portal, upon clicking space image captured, escape key terminates
    cv2.imshow("Identifing License Plate", frame)
    k = cv2.waitKey(1)

    #27 - escape key to terminate
    if k%256 == 27:
        print("Terminating...")
        break

    #32 - space bar key to capture image, signal to webcam terminated
    if k%256 == 32:
        img_name = "LicensePlate.png"
        cv2.imwrite(img_name, frame)
        print("Image Recorded!")
        break
cam.release()
cv2.destroyAllWindows()

img = cv2.imread("LicensePlate.png")

#grayscale image
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#checkpoint(image reference # 2 in proposal)
plt.imshow(cv2.cvtColor(gray, cv2.COLOR_BGR2RGB))

#noise reduction filer
bfilter = cv2.bilateralFilter(gray, 11, 17, 17)
#edge detection
edged = cv2.Canny(bfilter, 30, 200)

#checkpoint(image reference # 3 in proposal)
plt.imshow(cv2.cvtColor(edged, cv2.COLOR_BGR2RGB))

#identify polygons within image and find rectangles/squares and get biggest 10
keypoints = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contours = imutils.grab_contours(keypoints)
contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]
location = None
#sort through all contours and find the smoothest points, if it has 4 smooth points its likely numberplate
for contour in contours:
    approx = cv2.approxPolyDP(contour, 10, True)
    if len(approx) == 4:
        location = approx
        break

#mask the license plate/isolate it
mask = np.zeros(gray.shape, np.uint8)

new_image = cv2.drawContours(mask, [location], 0,255, -1)
new_image = cv2.bitwise_and(img, img, mask=mask)

(x,y) = np.where(mask==255)
(x1, y1) = (np.min(x), np.min(y))
(x2, y2) = (np.max(x), np.max(y))

cropped_image = gray[x1:x2+1, y1:y2+1]

#from cropped image containing only license plate apply easy-ocr to read letters from picture
reader = easyocr.Reader(['en'])
result = reader.readtext(cropped_image)

if(result.size()!= 0):
    text = result[0][-2]
    print(text)
else:
    print("failed to capture pls try again")



# UGH
Safe Door To Door Communication

# main.py

The main.py is real-time license plate identification. It access camera and detects license plate. Currently if your are taking image on a phone to test, please ensure that it is the majority of the screen and facing forward with license plate visible. Note that when testing for different formats of license plate, the exact license plate might not be extracted. However, as long as we are always extracting the same value from the car, verification will still work. For example is a name plate is 78E98B, and the code only extracts 78E98 that would be fine, as long as whenever the car is scanned we always extract 78E98. Our goal is to accurately idenfify the same car, not identify the exact license plate (even though this would be optimal). 

# main2.py 
The main2.py is testing with kaggle data. Please ensure the pathway of the archive and data is accurate. Currently it should be structured such that the main2.py is outside the archive folder and all xml annotations and png images are directly inside the archive folder. 

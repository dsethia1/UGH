# UGH
Safe Door To Door Communication

# Launching Application
Currently our front-end and back-end are running seperately. We would reccommend visual studio code for running backend and frontend. The backend can from camera access identify license plate. Front end is able to capture images. We still need to use flask to make it a full-stack app but we backend and frontend will serve as a proof of concept, such that in upcoming rounds we can make it a fully functional software application. 

# Frontend - Public Folder
1. Launching app through this git-hub resp. https://github.com/dsethia1/FrontEnd_UGH.git 
2. Launching is through npm

## Pip Commands (ios)
(All commands in terminal)
1. pip install npm 
2. npm start

# Backend
Backend is seperately run and cross-checked for accuracy

## Pip Commands (ios)
(All commands in terminal)
1. pip install opencv-python
2. pip install imutils
3. pip install numpy
4. pip install matplotlib
5. pip install easycvr

# Archive
Kaggle Data for testing and accuracy

# Errors
Most errors will be due to lack of files/libaries installed, ensure all libaries are installed

## Backend Errors
1. Access to camera --> Ensure the web-browser has access to camera
2. M1 Chip --> We noticed M1 chip sometimes throws of some libraries, while the code should still be able to function that might be a reason why it's not working
3. Create a virtual environment 

## Frontend Errors
1. Firewall --> Prevents opening locally hosted browser and cannot connect to signal
   a. Solution: Disable Firewall in Settings
2. Port already used --> We highly reccoommend using terminal to run commands as our current launching path is through terminal


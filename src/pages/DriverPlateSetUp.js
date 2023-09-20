import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./DriverPlateSetUp.module.css";
import Webcam from "react-webcam";
import {useRef} from 'react';
import React, { useState } from 'react' ;

const DriverPlateSetUp = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);//webcam reference
  const onDriverPlateSetUpClick = useCallback(() => {
    navigate("/detection-complete");
  }, [navigate]);
  const [imgSrc, setImgSrc] = useState(null);//initialize image storing variable
  //capture webcam screenshot
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);
  return (
    <div className={styles.driverPlateSetUp} onClick={onDriverPlateSetUpClick}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.qrCodeWallStickersVinylDe} >
            {imgSrc? (
              <img src = {imgSrc} alt = "webcam"/>
            ):(
              <Webcam height = {450} width = {600} ref={webcamRef} screenshotFormat = 'png' imageSmoothing = {true} />
            )}
        </div>
        <Button
          className = {styles.capture}
          sx = {{width : 100}}
          variant = "text"
          color = "primary"
          onClick ={capture}
        >{`Capture `}</Button>
        <div className={styles.frameItem} />
        <div
          className={styles.pleaseScanYour}
        >{`Please scan your car, with it fitting into the frame below `}</div>
        <div className={styles.frameInner} />
        <div className={styles.completeYourProfile}>Complete your profile</div>
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
      </div>
    </div>
  );
};

export default DriverPlateSetUp;

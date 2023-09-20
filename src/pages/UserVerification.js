import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./UserVerification.module.css";
import Webcam from "react-webcam";
import {useRef} from 'react';
import React, { useState } from 'react' ;

const UserVerification = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);//webcam reference
  //const onUserVerificationContainerClick = useCallback(() => {
    //navigate("/succesful-verification");
  //}[navigate]);

  const onSkipClick = useCallback(() => {
    navigate("/failed-verification");
  }, [navigate]);

  const [imgSrc, setImgSrc] = useState(null);//initialize image storing variable
  //capture webcam screenshot
  const formData = new FormData()
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('captured')

    axios.defaults.headers.common['Content Type'] = 'png'
    axios.post(',', formData).then((resp) => {
      console.log(resp)

    }).catch((error) =>{
      console.log(error)
    })
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div
      className={styles.userVerification}
     //onClick={onUserVerificationContainerClick}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <Button
          className={styles.skip}
          sx={{ width: 45 }}
          variant="text"
          color="primary"
          onClick={onSkipClick}
        >{`Skip `}</Button>
        <div className={styles.qrCodeWallStickersVinylDe} >
          <div className={styles.Web}>
            {imgSrc? (
              <img src = {imgSrc} alt = "webcam"/>
            ):(
              <Webcam height = {450} width = {600} ref={webcamRef} screenshotFormat = 'png' imageSmoothing = {true} />
            )}
          </div>
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
          className={styles.pleaseScanThe}
        >{`Please scan the driver’s car, with it fitting into the frame below `}</div>
        <div className={styles.frameInner} />
        <div className={styles.driverVerification}>Driver Verification</div>
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
      </div>
    </div>
  );
};

export default UserVerification;

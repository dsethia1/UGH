import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DetectionComplete.module.css";

const DetectionComplete = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.detectionComplete}>
      <div className={styles.lineParent}>
        <img className={styles.frameChild} alt="" src="/line-1.svg" />
        <div className={styles.ellipseParent} onClick={onFrameContainerClick}>
          <div className={styles.frameItem} />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.frameInner} />
        <div className={styles.youreNowReady}>
          You’re now ready to be matched with a rider!
        </div>
        <div className={styles.success}>Success!</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
      </div>
    </div>
  );
};

export default DetectionComplete;

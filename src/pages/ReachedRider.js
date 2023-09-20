import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReachedRider.module.css";

const ReachedRider = () => {
  const navigate = useNavigate();

  const onReachedRiderContainerClick = useCallback(() => {
    navigate("/ready-to-verify");
  }, [navigate]);

  const onArrivedTextClick = useCallback(() => {
    navigate("/ready-to-verify");
  }, [navigate]);

  const onMakokoMap1Click = useCallback(() => {
    // Please sync "iPhone 14 - 11" to the project
  }, []);

  return (
    <div className={styles.reachedRider} onClick={onReachedRiderContainerClick}>
      <div className={styles.lineParent}>
        <img className={styles.frameChild} alt="" src="/line-1.svg" />
        <b className={styles.assistActivated}>Assist - Activated</b>
        <div className={styles.frameItem} />
        <img className={styles.frameInner} alt="" src="/line-18.svg" />
        <div className={styles.arrived} onClick={onArrivedTextClick}>
          Arrived
        </div>
        <img className={styles.car1Icon} alt="" src="/car-1@2x.png" />
        <img className={styles.lineIcon} alt="" src="/line-11.svg" />
        <div
          className={styles.locationHappyTower}
        >{`Location: Happy Tower, 178 X St. `}</div>
        <img className={styles.jar11} alt="" src="/jar-1-1@2x.png" />
        <div className={styles.lineDiv} />
        <button className={styles.makokoMap1} onClick={onMakokoMap1Click} />
        <div className={styles.rectangleDiv} />
        <b className={styles.youHaveReached}>
          You have reached the rider’s approximate location
        </b>
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild1} />
        <img className={styles.jar21} alt="" src="/jar-2-1@2x.png" />
        <div className={styles.frameChild2} />
        <div className={styles.findYourRider}>Find Your Rider</div>
        <img className={styles.download2Icon} alt="" src="/download-1@2x.png" />
      </div>
    </div>
  );
};

export default ReachedRider;

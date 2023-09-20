import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FindRider.module.css";

const FindRider = () => {
  const navigate = useNavigate();

  const onFindRiderContainerClick = useCallback(() => {
    navigate("/iphone-14-10");
  }, [navigate]);

  return (
    <div className={styles.findRider} onClick={onFindRiderContainerClick}>
      <div className={styles.lineParent}>
        <img className={styles.frameChild} alt="" src="/line-1.svg" />
        <div className={styles.findYourRider}>Find Your Rider</div>
        <div className={styles.frameItem} />
        <img
          className={styles.makokoMap1Icon}
          alt=""
          src="/makokomap1@2x.png"
        />
        <img className={styles.car1Icon} alt="" src="/car-1@2x.png" />
        <div
          className={styles.locationHappyTower}
        >{`Location: Happy Tower, 178 X St. `}</div>
        <b className={styles.assistActivated}>Assist - Activated</b>
        <div className={styles.min}>1 min</div>
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <img className={styles.jar21} alt="" src="/jar-2-1@2x.png" />
        <img className={styles.lineIcon} alt="" src="/line-13.svg" />
        <img className={styles.frameChild1} alt="" src="/line-20.svg" />
        <img className={styles.frameChild2} alt="" src="/line-11.svg" />
        <img className={styles.frameChild3} alt="" src="/line-18.svg" />
        <img className={styles.frameChild4} alt="" src="/line-15.svg" />
        <div className={styles.lineDiv} />
        <img className={styles.jar11} alt="" src="/jar-1-1@2x.png" />
        <div className={styles.frameChild5} />
        <img
          className={styles.untitledDesign25}
          alt=""
          src="/untitled-design-2-5@2x.png"
        />
        <div className={styles.frameChild6} />
        <img className={styles.download2Icon} alt="" src="/download-1@2x.png" />
      </div>
    </div>
  );
};

export default FindRider;

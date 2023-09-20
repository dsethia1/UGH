import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/find-rider");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/driver-plate-setup");
  }, [navigate]);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.lineParent}>
        <img className={styles.frameChild} alt="" src="/line-1.svg" />
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} onClick={onEllipseClick} />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.ridersThisWeek}>riders this week</div>
        <div className={styles.frameInner} />
        <div className={styles.div}>0</div>
        <div className={styles.lineDiv} />
        <div className={styles.youveTransported}>
          <p className={styles.youve}>{`You’ve `}</p>
          <p className={styles.youve}>{`transported `}</p>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.completeYourProfile}>
          Complete your profile to access analytics!
        </div>
        <div className={styles.weeklyAnalytics}>Weekly Analytics</div>
        <div className={styles.frameChild1} />
        <Button
          className={styles.frameButton}
          sx={{ width: 195 }}
          color="primary"
          variant="contained"
          onClick={onFrameButtonClick}
        >
          Complete set-up
        </Button>
        <div className={styles.theresStillAn}>
          There’s still an important feature you haven’t activated yet!
        </div>
        <div className={styles.home}>Home</div>
        <img className={styles.user1Icon} alt="" src="/user-1@2x.png" />
        <div className={styles.welcomeBackPaul}>Welcome back, Paul</div>
      </div>
    </div>
  );
};

export default HomeScreen;

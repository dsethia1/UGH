import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShiftToUser.module.css";

const ShiftToUser = () => {
  const navigate = useNavigate();

  const onShiftToUserClick = useCallback(() => {
    navigate("/iphone-14-17");
  }, [navigate]);

  return (
    <div className={styles.shiftToUser} onClick={onShiftToUserClick}>
      <div className={styles.loading1Parent}>
        <img className={styles.loading1Icon} alt="" src="/loading-1@2x.png" />
        <div className={styles.switchingToUserViewContainer}>
          <p className={styles.switchingToUserView}>Switching to user-view</p>
        </div>
      </div>
    </div>
  );
};

export default ShiftToUser;

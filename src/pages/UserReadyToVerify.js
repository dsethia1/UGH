import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./UserReadyToVerify.module.css";

const UserReadyToVerify = () => {
  const navigate = useNavigate();

  const onUserReadyToVerifyClick = useCallback(() => {
    navigate("/user-verification");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/user-verification");
  }, [navigate]);

  return (
    <div
      className={styles.userReadyToVerify}
      onClick={onUserReadyToVerifyClick}
    >
      <div className={styles.yourDriverHasArrivedParent}>
        <div className={styles.yourDriverHas}>Your driver has arrived!</div>
        <img className={styles.location1Icon} alt="" src="/location-1@2x.png" />
        <Button
          className={styles.frameChild}
          sx={{ width: 240 }}
          color="primary"
          variant="contained"
          onClick={onFrameButtonClick}
        >
          Perform Verification
        </Button>
      </div>
    </div>
  );
};

export default UserReadyToVerify;

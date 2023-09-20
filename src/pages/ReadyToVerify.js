import { useCallback } from "react";
import styles from "./ReadyToVerify.module.css";

const ReadyToVerify = () => {
  const onReadyToVerifyClick = useCallback(() => {
    window.open("/iphone-14-18");
  }, []);

  return (
    <div className={styles.readyToVerify} onClick={onReadyToVerifyClick}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.youHaveReached}>You have reached the user</div>
        <div className={styles.pleaseWaitFor}>Please wait for verification</div>
      </div>
    </div>
  );
};

export default ReadyToVerify;

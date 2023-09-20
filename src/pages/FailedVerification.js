import styles from "./FailedVerification.module.css";

const FailedVerification = () => {
  return (
    <div className={styles.failedVerification}>
      <div className={styles.hopeYouHaveASafeTransportParent}>
        <div className={styles.hopeYouHave}>Hope you have a safe transport</div>
        <div className={styles.driverNotVerified}>Driver not verified!</div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default FailedVerification;

import styles from "./SuccesfulVerification.module.css";

const SuccesfulVerification = () => {
  return (
    <div className={styles.succesfulVerification}>
      <div className={styles.youreNowReadyForTransportParent}>
        <div className={styles.youreNowReady}>
          You’re now ready for transport
        </div>
        <div className={styles.driverVerified}>Driver verified!</div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default SuccesfulVerification;

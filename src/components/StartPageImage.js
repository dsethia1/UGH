import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StartPageImage.module.css";

const StartPageImage = () => {
  const navigate = useNavigate();

  const onStartPageImageClick = useCallback(() => {
    navigate("/home-screen");
  }, [navigate]);

  return (
    <img
      className={styles.startPageIcon}
      alt=""
      src="/start-page@2x.png"
      onClick={onStartPageImageClick}
    />
  );
};

export default StartPageImage;

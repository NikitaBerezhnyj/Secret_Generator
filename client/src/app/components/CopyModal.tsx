import React, { useState, useEffect } from "react";
import styles from "../styles/CopyModal.module.css";

interface CopyModalProps {
  show: boolean;
  onClose: () => void;
}

const CopyModal: React.FC<CopyModalProps> = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      if (isVisible) {
        setIsVisible(false);
        onClose();
      }
    }
  }, [show, onClose, isVisible]);

  return (
    <div
      className={`${styles["copy-modal-container"]} ${
        isVisible ? "" : styles.hide
      }`}
    >
      {isVisible && (
        <>
          <p className={styles["copy-modal-container p"]}>Text copied!</p>
          <div className={styles["progress-bar"]}>
            <div className={styles["progress"]} />
          </div>
        </>
      )}
    </div>
  );
};

export default CopyModal;

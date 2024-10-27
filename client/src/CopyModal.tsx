import React, { useState, useEffect } from "react";
import "./CopyModal.css";

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
    <div className={`copy-modal-container ${isVisible ? "" : "hide"}`}>
      {isVisible && (
        <>
          <p>Text copied!</p>
          <div className="progress-bar">
            <div className="progress" />
          </div>
        </>
      )}
    </div>
  );
};

export default CopyModal;

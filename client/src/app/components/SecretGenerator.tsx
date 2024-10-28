"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import CopyModal from "./CopyModal";
import { getPassword, getJwtSecret } from "../api/Api";
import styles from "../page.module.css";

export default function SecretGenerator() {
  const [selectedType, setSelectedType] = useState<"jwt" | "password">("jwt");
  const [generatedValue, setGeneratedValue] = useState<string>("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleGenerateClick = async () => {
    try {
      const result =
        selectedType === "jwt" ? await getJwtSecret() : await getPassword();
      const value =
        selectedType === "jwt" ? result.token || "" : result.message || "";
      setGeneratedValue(value);
    } catch (error) {
      console.error("Error generating value:", error);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(generatedValue)
      .then(() => {
        console.log("Copied to clipboard!");
        setModalVisible(true);
      })
      .catch((err) => console.error("Failed to copy text:", err));
  };

  return (
    <div className={`${styles["page"]} ${styles["secret-generator-app"]}`}>
      <h1>Secret Generator</h1>
      <div className={styles["generator-container"]}>
        <div className={styles["type-selector"]}>
          <label htmlFor="typeSelect">Select Type:</label>
          <select
            id="typeSelect"
            value={selectedType}
            onChange={(e) =>
              setSelectedType(e.target.value as "jwt" | "password")
            }
          >
            <option value="jwt">JWT Secret</option>
            <option value="password">Password</option>
          </select>
        </div>
        <div className={styles["output-container"]}>
          <p className={styles["generated-output"]}>
            {generatedValue || "Select type and click generate"}
          </p>
          <button
            className={styles["copy-button"]}
            disabled={!generatedValue}
            onClick={handleCopyClick}
            aria-label="Copy to clipboard"
          >
            <FaRegCopy />
          </button>
        </div>
        <button
          className={styles["generate-button"]}
          onClick={handleGenerateClick}
        >
          Generate
        </button>
      </div>
      {isModalVisible && (
        <CopyModal
          show={isModalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
        />
      )}
    </div>
  );
}

import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name) => (
        <button
          key={name}
          className={styles.button}
          onClick={() => onButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

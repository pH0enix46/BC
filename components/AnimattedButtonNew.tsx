"use client";

import React from "react";
import styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const AnimatedButton = ({
  text = "Learn with DesignCode",
  className = "",
  onClick,
}: AnimatedButtonProps) => {
  return (
    <div className={`inline-block bg-transparent ${className}`}>
      <button
        className={`${styles.shinyCta} focus:outline-none`}
        onClick={onClick}
      >
        <span>{text}</span>
      </button>
    </div>
  );
};

export default AnimatedButton;

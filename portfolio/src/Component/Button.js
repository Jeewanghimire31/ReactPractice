import React from "react";
import Styles from "../assets/css/Button.module.css";

const Button = (props) => {
  const { type, content } = props;
  let buttonStyles = type;
  if (type === "primary") buttonStyles = Styles.primary;
  return (
    <div>
      <button className={buttonStyles}>{content}</button>
    </div>
  );
};

export default Button;

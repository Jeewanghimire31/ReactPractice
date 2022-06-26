import React, { Children } from "react";
import Styles from "../assets/css/ThingsCart.module.css";

const ThingsCart = (props) => {
  const { logo, title, children } = props;

  // if()
  return (
    <div className={Styles.container}>
      <p>{logo}</p>

      <h5>{title}</h5>

      <p>{children}</p>
    </div>
  );
};

export default ThingsCart;

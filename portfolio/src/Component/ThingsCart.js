import React, { Children } from "react";
import Styles from "../assets/css/ThingsCart.module.css";
// import { IconName } from "react-icons/fa";

const ThingsCart = (props) => {
  const { logo, title, children } = props;

  // if()
  return (
    <div className={Styles.container}>
      <div className={Styles.icon}>

      {logo}
      </div>

      <h5>{title}</h5>

      <p>{children}</p>
    </div>
  );
};

export default ThingsCart;

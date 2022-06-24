import React from "react";
import Styles from "../assets/css/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={Styles.container}>
        <h2>JEEWAN</h2>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PREMIUM</a>
          </li>
          <li>
            <a href="#">SITE LIBRARY</a>
          </li>
          <li>
            <a href="#">PRICING</a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
          <li>
            <a href="#">LOG IN</a>
          </li>
        </ul>{" "}
      </div>
    </>
  );
};

export default Navbar;

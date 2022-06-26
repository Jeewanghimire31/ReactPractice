import React from "react";
import Styles from "../assets/css/Navbar.module.css";
import Button from "./Button";

const Navbar = () => {
  return <>
  
  <div className={Styles.container}>
    <h3>Jeewan Ghimire</h3>
    <div className={Styles.content}>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
    </ul>
    <Button type="primary" content="Hire Me"/>
  </div>
  </div>
  
  </>

};

export default Navbar;

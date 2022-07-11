import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import Styles from "../assets/css/Social.module.css";

const Social = (props) => {
  const {color} = props;
  let socialStyles = color;
  if(color === "blue"){
    socialStyles = Styles.socialPrimary;
  }else{
    socialStyles = Styles.socialSecondary;
  }
  return (
    <div className={socialStyles}>
    <a href="#"><FaTwitter/></a>
    <a href="#"><FaFacebook/></a>
    <a href="#"><FaGithub/></a>
    <a href="#"><FaLinkedinIn/></a>
  </div>
  )
}

export default Social
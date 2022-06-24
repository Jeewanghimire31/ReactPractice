import React from 'react'
import Styles from "../assets/css/Button.module.css"

const Button = (props) => {
    const {type, content}=props; 
    let buttonStyles;
    if(type==="danger"){
        buttonStyles=Styles.danger;
    }else{
        buttonStyles = Styles.white;
    }
  return (
    <>

    <button className={buttonStyles} >{content}</button>   
    </>
  )
}

export default Button
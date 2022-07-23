import React from 'react';
import Styles from "../assets/css/Input.module.css"

const Input = (props) => {
  
  return (
    <div>
        <input {...props} className={Styles.content} />      
    </div>
  )
}

export default Input;
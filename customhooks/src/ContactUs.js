import React, {useState} from "react";
import useForm from "./hooks/useForm";

const ContactUs = () => {
    const [values, handleChange] = useForm();
  return (
    <div>
        {values.fullname}
        {values.username}
        {values.password}
      <form action="">
        <input type="text" name="fullname" onChange={(e)=> handleChange(e)}/>
        <input type="text" name="username" onChange={(e)=> handleChange(e)}/>
        <input type="password" name="password" onChange={(e)=>handleChange(e)} />
      </form>
    </div>
  );
};

export default ContactUs;

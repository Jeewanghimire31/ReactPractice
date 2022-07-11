import React from "react";
import { Formik } from "formik";
import UserLoginSchema from "./ValidationSchema/UserLoginSchema";
import TextField from './TextField';

const App = () => {
 
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => {
          data.preventDefault();
          console.log("form submitted");
        }}
        validationSchema={UserLoginSchema}
      >
        {({ errors, handleChange, handleSubmit, values }) => {
          console.log(values);
          return (
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
           <TextField  name="email" placeholder="Email"/>
              <label>Password:</label>
              <TextField name = "password" type= "password" placeholder="password"/>
              <br />
              <button type="submit">dfghjkjhgf</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;

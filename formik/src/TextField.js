import React from "react";
import { useField } from "formik";

const TextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input type="text" {...field} {...props}  />
      {meta.error}
      <br />
    </div>
  );
};

export default TextField;

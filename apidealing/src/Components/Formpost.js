import React from "react";
import { useState } from "react";
import Axios from "axios";

const Formpost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const savingFile = () => {
    console.log({ name, email, password });

    const url = "https://jsonplaceholder.typicode.com/posts";
    let data = { name, email, password };
    Axios.post(
      url,
      {
        id: 11,
        title: name,
        body: email,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        console.log("response data" + { res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="YourName"
        onChange={nameChangeHandler}
      />
      <input
        type="text"
        value={email}
        name="email"
        placeholder="Email"
        onChange={emailChangeHandler}
      />
      <input
        type="password"
        value={password}
        name="name"
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <button type="button" onClick={savingFile}>
        Submit
      </button>
    </div>
  );
};

export default Formpost;

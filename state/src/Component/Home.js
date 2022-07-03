import React, { useState } from "react";
import Styles from "../assets/css/Home.module.css";

const Home = () => {
//   let count = 0;

  const [count, setCount] = useState(0);
  console.log(useState(0));


//   console.log(useState());
  return (
    <section>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          setCount((prev)=>prev + 1);
        }}
      >
        {" "}
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Decrease
      </button>
    </section>
  );
};

export default Home;

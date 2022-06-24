import React from "react";
import Styles from "../assets/css/Home.module.css";
import Button from "./Button";
import List from "./List";

const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <p>Resolved</p>
        <p>Shadow Under NavBar</p>
        <div className={Styles.btnTwo}>
          <Button type="danger" content="LOG IN" />
          <Button type="white" content="FREE" />
        </div>
        <div className={Styles.btnOne}>
          <Button type="white" content="SEARCH" />
        </div>
        <p>
          Support <span>&#62;</span> Shadow under nav bar
        </p>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default Home;

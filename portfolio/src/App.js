import React from "react";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import ThingsLove from "./Component/ThingsLove";
import AboutMe from './Component/AboutMe';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ThingsLove />
      <AboutMe/>
    </div>
  );
};

export default App;

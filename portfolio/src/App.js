import React from "react";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import ThingsLove from "./Component/ThingsLove";
import AboutMe from './Component/AboutMe';
import Skills from "./Component/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ThingsLove />
      <AboutMe/>
      <Skills/>
    </div>
  );
};

export default App;

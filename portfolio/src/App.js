import React from "react";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import ThingsLove from "./Component/ThingsLove";
import AboutMe from "./Component/AboutMe";
import Skills from "./Component/Skills";
import ContactUs from "./Component/ContactUs";
// import Input from "./Component/Input";
// import Social from "./Component/Social";

//{importing routerpage 
// import Router from "./assets/Router/Router";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";}


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ThingsLove />
      <AboutMe/>
      <Skills/>
      <ContactUs/>

      {/* <Input/> */}

      {/* <Social/> */}
    </div>
  );
};

export default App;

import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

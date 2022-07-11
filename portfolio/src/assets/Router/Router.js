import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './../../Component/AboutMe';
import Home from '../../Component/Home';
import ThingsLove from '../../Component/ThingsLove';
import ContactUs from '../../Component/ContactUs';
import Skills from '../../Component/Skills';
import Navbar from '../../Component/Navbar';

const Router = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <ThingsLove />
              <Skills/>
              <AboutMe/>
              <ContactUs/>
            </>
          }
        />
        <Route path="Home" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="thingslove" element={<ThingsLove />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router
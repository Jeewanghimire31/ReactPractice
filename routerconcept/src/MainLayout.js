import React from 'react'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout
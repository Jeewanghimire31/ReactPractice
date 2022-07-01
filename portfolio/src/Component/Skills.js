import React from 'react';
import Styles from "../assets/css/Skills.module.css";
import { FaJs, FaReact, FaCss3, FaHtml5, FaGit, FaGithub, FaSass, FaBootstrap } from "react-icons/fa";
import {SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section className={Styles.containerBox}>
        <h1>My Skills</h1>

        <div className={Styles.container}>

            <FaHtml5 className={Styles.icon}/>
            <FaCss3 className={Styles.icon}/>
            <FaJs className={Styles.icon}/>
            <FaReact className={Styles.icon}/>
            <SiMysql className={Styles.icon}/>
            <FaGit className={Styles.icon}/>
            <FaGithub className={Styles.icon}/>
            <FaSass className={Styles.icon}/>
            <FaBootstrap className={Styles.icon}/>
            
        </div>

    </section>
  )
}

export default Skills
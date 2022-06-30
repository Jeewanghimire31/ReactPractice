import React from 'react';
import Styles from "../assets/css/AboutMe.module.css";
import testimg from"../assets/img/DSC_0312.JPG"

const AboutMe = () => {
  return (
    <section className={Styles.containerBox}>
      <h1>About Me</h1>
      <div className={Styles.container}>
        <div>
            <img src={testimg} />
        </div>
        <div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in cum, excepturi velit officia odit minus dolore aliquam cupiditate dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem in dolore possimus. Lorem, ipsum dolor sit amet cons Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem repellendus, sit aliquid sequi veritatis dicta dolorem? Ducimus ea, dolore aliquam animi cupiditate distinctio doloribus obcaecati alias quia, itaque nemo sit hic quos iure tenetur sapiente eius enim repudiandae earum!</p>
        </div>
        </div>
    </section>
  )
}

export default AboutMe;
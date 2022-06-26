import React from 'react'
import ThingsCart from './ThingsCart';
import Styles from "../assets/css/ThingsLove.module.css"

const ThingsLove = () => {
  return (
    <div className={Styles.ContainerBox}>
        <h1>Things I Love</h1>
    <div className={Styles.container}>
        <ThingsCart logo="javascript" title="Javascript">I just extremely love javascript, I can’t even express how much I love javascript with just a few lines.</ThingsCart>
        <ThingsCart logo="reactjs" title="React" >I love getting familier with React tools. It is quite similar with the Javascript.</ThingsCart>
        <ThingsCart logo="frontend" title="Front-end">
        I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS.
            </ThingsCart>
    </div>
    </div>
  )
}

export default ThingsLove;
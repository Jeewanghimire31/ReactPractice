import React from 'react';
import Styles from "../assets/css/List.module.css";


const List = () => {
  return (
    <div className={Styles.content}>
        <p>Popular Articles</p>
        <ul>
            <li><a href='#'>Pramesh is a Boy</a></li>
            <li><a href='#'>Pramesh lives in Sankhamul</a></li>
            <li><a href='#'>Pramesh is a Web Developer</a></li>
            <li><a href='#'>I am also doing Web Development</a></li>
            <li><a href='#'>Pramesh and I both are engineering Students</a></li>
            <li><a href='#'>We are working on a project</a></li>
        </ul>
    </div>
  )
}

export default List
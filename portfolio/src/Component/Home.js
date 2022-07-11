import React from "react";
import Styles from "../assets/css/Home.module.css";
import Button from "./Button";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Social from "./Social";

const Home = () => {
  return (
    <section className={Styles.containerBox}>
      <div className={Styles.container}>
        <div>
          <p>Hello I'm</p>
          <p>JEEWAN GHIMIRE</p>
          <p>INTERACTIVE FRONT-END DEVELOPER.
          </p>
            <p>I BUILD THINGS FOR THE WEB.</p>
          
          <Button type="primary" content="Hire Me" />

          {/* social links */}
          <div>
            <Social color = "blue"/>
          </div>
        </div>

        <div>
          <pre>
            1&nbsp;&nbsp;class = <b>person</b>&#123;
          </pre>
          <pre>2&nbsp;&nbsp;&nbsp;constructor()&#123;</pre>
          <pre>
            3&nbsp;&nbsp;&nbsp;&nbsp;this.name = <b>"JEEWAN GHIMIRE";</b>
          </pre>
          <pre>
            4&nbsp;&nbsp;&nbsp;&nbsp;this.traits=[<b>"DEV"</b>]
          </pre>
          <pre>5&nbsp;&nbsp;&nbsp;this.age=new.Date().getFullYear-1998</pre>
          <pre>6&nbsp;&nbsp;&#125;</pre>
          <pre>7&nbsp;&#125;</pre>
        </div>
      </div>
    </section>
  );
};

export default Home;

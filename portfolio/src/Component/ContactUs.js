import React from "react";
import Styles from "../assets/css/ContactUs.module.css";
import Input from "./Input";
import Button from "./Button";
import Social from "./Social";

const ContactUs = () => {
  return (
    <section className={Styles.contactBox}>
      <h1>Get In Touch</h1>

      <div className={Styles.container}>
        <div className={Styles.field}>
          <p className={Styles.info}>
            I am always here to answer your any queries related to my work and
            service. The door is always open just a wait of a knock at a door. I
            will answer all the question which you will drop here. Thank You!!!
          </p>
          <div className={Styles.inputField}>
            <Input type="text" placeholder="Your Name" />
            <div style={{ width: "10px" }}></div>
            <Input type="email" placeholder="Your Email" />
          </div>
          <div>
            <textarea
              rows="8"
              placeholder="Message"
              className={Styles.message}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            <Button type="primary" content="Send" />
          </div>
        </div>
        <div className={Styles.contact}>
          <p style={{ color: "white" }}>EMAIL:</p>
          <p>jeewanghimire31@gmail.com</p>
          <p style={{ color: "white" }}>Contact Number:</p>
          <p>9867823952</p>
          <p>Address:</p>
          <p>Sankhamul, Kathmandu</p>
          <div className={Styles.social}><Social color="white"/></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

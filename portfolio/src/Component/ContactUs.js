import React from "react";
import Styles from "../assets/css/ContactUs.module.css";
import Input from "./Input";
import Button from "./Button";
import Social from "./Social";

const ContactUs = () => {
  return (
    <section className={Styles.contactBox}>
      <h1>Let's Talk</h1>

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
          <div className={Styles.details}>
          <p><a href="mailto:jeewanghimire21@gmail.com"> jeewanghimire31@gmail.com </a></p>
          <p><a href="tel:+9779867823952"> +977-9867823952</a></p>
          <p><a href="https://goo.gl/maps/LWjb5PFMxQWNp5LAA"> Sankhamul, Kathmandu </a></p>
          <div className={Styles.social}>
            <Social/>
          </div>
          </div>
          <div >
        <iframe className={Styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23851.798603199622!2d83.21759128154655!3d27.71841080406069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f52f58c3fcb1%3A0x7136bcdd47f00d34!2sSaljhundi%2032900!5e0!3m2!1sen!2snp!4v1658587878393!5m2!1sen!2snp" width="600" height="450"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

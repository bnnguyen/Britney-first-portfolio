import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png"
import linkedinIcon from "../../../assets/contact/linkedinIcon.png"
import githubIcon from "../../../assets/contact/githubIcon.png"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_izq534p', 'template_5o9pq2r', form.current, {
        publicKey: '3INao13TI3F9YjRph',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer id="contact" className={styles.container}>
      <h2>Contact Me!</h2>
      <div className={styles.infoContainer}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:britney.nguyen249@gmail.com" target="_blank">britney.nguyen249@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/britney-quyen-nguyen/" target="_blank">linkedin.com/in/britney-quyen-nguyen</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/bnnguyen" target="_blank">github.com/bnnguyen</a>
        </li>
      </ul>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email"/>
        <textarea name="message" placeholder="Your Message"/>
        <input type="submit" value="Send" className={styles.sendBtn}/>
    </form>
    </div>
    <p>Copyright ©Britney Nguyen. All rights reserved.</p>
    </footer>
  );
};
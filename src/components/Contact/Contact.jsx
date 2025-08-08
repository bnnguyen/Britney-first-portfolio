import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";

export const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    // Basic email format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    // Validation checks
    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setErrorMessage(""); // Clear error if valid

    emailjs
      .sendForm("service_izq534p", "template_5o9pq2r", form.current, {
        publicKey: "3INao13TI3F9YjRph",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormSubmitted(true); // Hide form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <h2>Contact Me!</h2>
      <div className={styles.infoContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={emailIcon} alt="Email icon" />
            <a
              href="mailto:britney.nguyen249@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              britney.nguyen249@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a
              href="https://www.linkedin.com/in/britney-quyen-nguyen/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/britney-quyen-nguyen
            </a>
          </li>
          <li className={styles.link}>
            <img src={githubIcon} alt="Github icon" />
            <a
              href="https://github.com/bnnguyen"
              target="_blank"
              rel="noreferrer"
            >
              github.com/bnnguyen
            </a>
          </li>
        </ul>

        {/* Form or Success Message */}
        {!formSubmitted ? (
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message" />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <input type="submit" value="Send" className={styles.sendBtn} />
          </form>
        ) : (
          <p className={styles.success}>
          🎉 Thank you for reaching out! 
          <br/>
          Your message is on its way,  
          and I’ll get back to you as soon as I can. ✨
          </p>
        )}
      </div>
      <p>Copyright ©Britney Nguyen. All rights reserved.</p>
    </footer>
  );
};

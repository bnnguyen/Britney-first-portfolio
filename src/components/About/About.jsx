import React from "react";
import educationIcon from "../../../public/assets/about/educationIcon.png";
import aboutImage from "../../../public/assets/about/aboutImage.png";
import skillIcon from "../../../public/assets/about/skillIcon.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <p className={styles.description}>
        Hello! I'm Britney - a driven Computer Science and Mathematical Economics student at the University of Richmond with a passion for building scalable systems and impactful tech solutions. From <div className={styles.specialText}>optimizing real-time detection</div> on Jetson Nano at <div className={styles.specialText}>DESLab</div> to <div className={styles.specialText}>leading machine learning projects</div> at <div className={styles.specialText}>Amazon Web Services</div>, I bring hands-on experience across <div className={styles.specialText}>AI research, cloud computing, and full-stack development.</div> I'm also an <div className={styles.specialText}>ICPC regional medalist</div> and a proud <div className={styles.specialText}>Richmond Scholar</div>.
        <br></br>
        <br></br>
        When I'm not coding, you'll find me enjoying a comforting bowl of Bún Bò, snacking on fresh berries, and recharging for my next big idea.
        </p>
        <div className={styles.blockcontainer}>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3><img src={educationIcon} alt="Education Icon"/> Education</h3>
              <p>
                Computer Science and Mathematical Economics; Geography minor <br></br>
                University of Richmond<br></br>
                May 2028<br></br>
                Grade: 4.0/4.0<br></br>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3><img alt="Skill Icon" src={skillIcon}/> Core Skills</h3>
              <p>
                Full-Stack Development<br></br>
                Machine Learning<br></br>
                OOP & DSA<br></br>
                Cloud Computing<br></br>
              </p>
            </div>
          </li>
        </div>
        </ul>
      </div>
    </section>
  );
};
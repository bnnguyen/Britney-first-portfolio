import React from "react";
import styles from "./Skills.module.css";
import tickIcon from "../../../assets/skills/tickIcon.png";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.gridContainer}>

        <div className={styles.skillBox}>
          <div className={styles.innerBox}>
            <h3>Technical Competencies</h3>
            <ul className={styles.twoColumn}>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Web Development</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Object-Oriented Programming</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Data Structures & Algorithms</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Development & Operations</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Machine Learning & Data Mining</li>
            </ul>
          </div>
        </div>

        <div className={styles.skillBox}>
          <div className={styles.innerBox}>
            <h3>Frameworks & Technologies</h3>
            <ul className={styles.twoColumn}>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> SQL & noSQL</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Node.js</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> React</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> REST API</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> GraphQL</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Tkinter</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Pytorch</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> MediaPipe & CVZone</li>
            </ul>
          </div>
        </div>

        <div className={styles.skillBox}>
          <div className={styles.innerBox}>
            <h3>Languages</h3>
            <ul className={styles.twoColumn}>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> C/C++/C#</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> TypeScript</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Python</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Java</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> JavaScript</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className={styles.skillBox}>
          <div className={styles.innerBox}>
            <h3>Tools & Platforms</h3>
            <ul className={styles.singleColumn}>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Docker</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Git & GitHub</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> Linux</li>
              <li><img src={tickIcon} alt="tick" className={styles.icon} /> AWS (SageMaker, EC2, S3)/Azure</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from "react";
import educationIcon from "../../../assets/about/educationIcon.png";
import aboutImage from "../../../assets/about/aboutImage.png";
import skillIcon from "../../../assets/about/skillIcon.png";
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
        Hello! I'm Britney – a driven <div className={styles.specialText}>Computer Science and Mathematical Economics</div> student at the University of Richmond with a passion for building scalable systems and impactful tech solutions. At <div className={styles.specialText}>Google</div>, I developed <div className={styles.specialText}>high-throughput pipelines</div> and migrated key Google Play <div className={styles.specialText}>AI workflows</div> from <div className={styles.specialText}>Python prototypes</div> to a <div className={styles.specialText}>modular C++ production system</div>, processing multimodal data at scale. Previously, I optimized <div className={styles.specialText}>real-time detection</div> on <div className={styles.specialText}>Jetson Nano</div> at <div className={styles.specialText}>DESLab</div> and led <div className={styles.specialText}>machine learning</div> projects at <div className={styles.specialText}>Amazon Web Services</div>, bringing hands-on experience across <div className={styles.specialText}>AI research, cloud computing, and full-stack development</div>. I'm also an <div className={styles.specialText}>ICPC regional medalist</div> and a proud <a href="https://scholars.richmond.edu/"><div className={styles.specialText}>Richmond Scholar</div></a>.
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
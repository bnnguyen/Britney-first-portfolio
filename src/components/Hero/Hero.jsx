import React from 'react'
import heroImg from "../../../assets/hero/hImg.png"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Britney!</h1>
            <p className={styles.description}>
                I'm a software developer and machine learning enthusiast studying Computer Science and Mathematical Economics at the University of Richmond. 
                Reach out if you'd like to learn more!
            </p>
            <div className={styles.heroBtn}>
                <a href='mailto:britney.nguyen249@gmail.com'>Contact Me</a>
                <a href='https://drive.google.com/file/d/1pCDALE3cORw-o3jG5892BWJZj48I3iYm/view?usp=sharing'>Resume</a>
            </div>
        </div>
        <img className={styles.heroImg} src={heroImg} alt="Hero image of me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

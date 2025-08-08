import React from 'react'
import heroImg from "../../../public/assets/hero/hero.jpg"
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
                <a href='#contact'>Contact Me</a>
                <a href='https://drive.google.com/file/d/1Vayh_meS_b5lLawBW7AO-RtvymPNJOMO/view?usp=sharing' target="_blank">Resume</a>
            </div>
        </div>
        <img className={styles.heroImg} src={heroImg} alt="Hero image of me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

import React from "react"
import styles from "./Experiences.module.css"
import DESLabLogo from "../../../assets/experiences/DESLabLogo.jfif"
import AWSLogo from "../../../assets/experiences/AWSLogo.png"

export const Experiences = () => {
    return (
        <section className={styles.container} id="experiences">
        <h2 className={styles.title}>Experiences</h2>
        <br/>
        <h4>Work</h4>
        <li className={styles.experienceItem}>
            <div className={styles.logo}>
                <img src={DESLabLogo} alt="DESLab Logo"/>
            </div>
            <h3>Digital Signal Processing And Embedded Systems Laboratory (DESLab), University of Science | Ho Chi Minh, Vietnam</h3>
            <h3>Student Researcher | June 2023 - January 2024</h3>
            <p>
            <br></br>
            ● Designed research methods and implemented deep learning algorithms with <div className={styles.specialText}>Convolutional Neural Network</div> and <div className={styles.specialText}>YOLOv8</div>, achieving a <div className={styles.specialText}>98%</div> blink rate detection accuracy by reviewing academic literature, comparing approaches, and devising test cases.<br/>
            ● Developed the main program in <div className={styles.specialText}>Python</div> using the <div className={styles.specialText}>FaceMesh</div> module from <div className={styles.specialText}>MediaPipe</div> and <div className={styles.specialText}>CVZone</div> libraries, boosting the Jetson Nano camera's FPS from <div className={styles.specialText}>5 to 20</div>, enhancing real-time detection performance by <div className={styles.specialText}>200%</div>.<br/>
            ● Co-authored a <a href="https://drive.google.com/file/d/1fIGrtXEDzqm4JUNLlybB6iBr2WXxoPOd/view" target="_blank">research paper</a>; presented to Vietnam's top university professors, becoming a semi-finalist in the Vietnam Science and Engineering Fair; awarded <div className={styles.specialText}>3rd place</div> at PTNK Science Community's Research Symposium.<br/>
            </p>
        </li>
        <li className={styles.experienceItem}>
            <div className={styles.logo}>
                <img src={AWSLogo} alt="DESLab Logo"/>
            </div>
            <h3>Amazon Web Services | Remote</h3>
            <h3>Data Engineer Intern | July 2023 - August 2023</h3>
            <p>
            <br></br>
            ● Led a team of four in training machine learning models on anonymized US income data, focusing on income prediction.<br/>
            ● Implemented core machine learning algorithms (KNNs, Decision Trees, Logistic Regression, Neural Networks) using Python (scikit-learn, numpy, pandas, imbalance-learn, matplotlib, optuna) to analyze data effectively; built ensemble models with AutoML and auto-sklearn; optimized hyperparameters and interpreted feature importance using SHAP.<br/>
            ● Measured accuracy using precision, recall, and F1 score; visualized datasets and plotted graphs.<br/>
            ● Leveraged AWS services (Amazon SageMaker Notebooks, Amazon S3, and Amazon EC2) to streamline model training; presented findings, experiment summaries, and data insights to company representatives; achieved a 94.8% prediction accuracy.<br/>
            </p>
        </li>
        </section>
    )
}
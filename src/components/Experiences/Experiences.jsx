import React from "react"
import styles from "./Experiences.module.css"
import DESLabLogo from "../../../assets/experiences/DESLabLogo.jfif"
import AWSLogo from "../../../assets/experiences/AWSLogo.png"
import fablabLogo from "../../../assets/experiences/fablabLogo.jfif"
import PRISEELogo from "../../../assets/experiences/PRISEELogo.jpg"

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
            ● Co-authored a <a href="https://drive.google.com/file/d/1fIGrtXEDzqm4JUNLlybB6iBr2WXxoPOd/view" target="_blank"><strong>research paper</strong></a>; presented to Vietnam's top university professors, becoming a semi-finalist in the Vietnam Science and Engineering Fair; awarded <div className={styles.specialText}>3rd place</div> at PTNK Science Community's Research Symposium.<br/>
            </p>
        </li>
        <li className={styles.experienceItem}>
            <div className={styles.logo}>
                <img src={AWSLogo} alt="AWS Logo"/>
            </div>
            <h3>Amazon Web Services | Remote</h3>
            <h3>Data Engineer Intern | July 2023 - August 2023</h3>
            <p>
            <br></br>
            ● Led a team of four in training machine learning models on anonymized US income data, focusing on income prediction.<br/>
            ● Implemented core <div className={styles.specialText}>machine learning algorithms (KNNs, Decision Trees, Logistic Regression, Neural Networks)</div> using <div className={styles.specialText}>Python (scikit-learn, numpy, pandas, imbalance-learn, matplotlib, optuna)</div> to analyze data effectively; built ensemble models with <div className={styles.specialText}>AutoML</div> and <div className={styles.specialText}>auto-sklearn</div>; optimized hyperparameters and interpreted feature importance using <div className={styles.specialText}>SHAP</div>.<br/>
            ● Measured accuracy using <div className={styles.specialText}>precision, recall, and F1 score</div>; visualized datasets and plotted graphs.<br/>
            ● Leveraged <div className={styles.specialText}>AWS services (Amazon SageMaker Notebooks, Amazon S3, and Amazon EC2)</div> to streamline model training; presented findings, experiment summaries, and data insights to company representatives; achieved a <div className={styles.specialText}>94.8% prediction accuracy</div>.<br/>
            </p>
        </li>
        <li className={styles.experienceItem}>
            <div className={styles.logo}>
            <img src={fablabLogo} alt="FabLab Saigon Logo"/>
            </div>
            <h3>FabLab Saigon | Ho Chi Minh, Vietnam</h3>
            <h3>Research Intern | May 2022 - July 2022</h3>
            <p>
            <br></br>
            ● Constructed and assessed cost-effective wall plotter machine alternatives using <div className={styles.specialText}>Python, Arduino (C++), and Processing (Java)</div>.<br/>
            ● Tested over 10 stepper motor models with sensors to achieve a 91.7% accuracy in line drawing on walls.<br/>
            ● Fabricated machine parts with a laser cutter and 3D printer, <div className={styles.specialText}>reducing production costs by 47.8%</div>.<br/>
            ● Co-authored research paper: “Improving the Cost and Efficiency of Wall Plotting Machine” to disseminate findings.<br/>
            </p>
        </li>
        <h4>Leadership</h4>
        <li className={styles.experienceItem}>
            <div className={styles.logo}>
            <img src={PRISEELogo} alt="PRISEE Logo"/>
            </div>
            <h3>PRISEE - PTNK Science Community | Ho Chi Minh, Vietnam</h3>
            <h3>Research Peer Mentor | April 2024 - December 2024</h3>
            <p>
            <br></br>
            ● <div className={styles.specialText}>Mentored 10 students, connected 20+ with partnered research laboratories</div>, and reviewed <div className={styles.specialText}>10 research reports</div>; designed and managed DESLab's recruitment process, attracting <div className={styles.specialText}>900+ views</div> with 300+ views per post, boosting interactions by <div className={styles.specialText}>90%</div>, post reach by <div className={styles.specialText}>75%</div>, and page visits by <div className={styles.specialText}>60%</div>, ultimately <div className={styles.specialText}>doubling</div> the number of applicants.<br/>
            ● Designed <div className={styles.specialText}>12 lectures on Google Colab</div>, teaching <div className={styles.specialText}>fundamental ML algorithms</div> and <div className={styles.specialText}>data processing techniques</div> in Python.<br/>
            </p>
        </li>
        </section>
    )
}
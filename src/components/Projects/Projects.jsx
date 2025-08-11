import React from "react";

import styles from "./Projects.module.css";
import SFPic from "../../../assets/projects/SoulBound.jpg"
import PFPic from "../../../assets/projects/PathFinder.png"
import PNPic from "../../../assets/projects/pniwf.png"
import PTPic from "../../../assets/projects/PLANTrees.png"
import triangPic from "../../../assets/projects/triangles.jpg"
import ClockPic from "../../../assets/projects/clock.jpg"
import WPPic from "../../../assets/projects/wp.jpg"
import EBCPic from "../../../assets/projects/ebc.png"

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.prjcontainer}>
          <img
            src={SFPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Soul Fighter: Last Soul Standing</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/SoulBound" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
        <div className={styles.prjcontainer}>
          <img
            src={PFPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Advanced Pathfinder Visualization</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/PathFinder" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
        <div className={styles.prjcontainer}>
          <img
            src={PNPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Print Number in Word Form</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/PrintNumberInWordForm" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
        <div className={styles.prjcontainer}>
          <img
            src={PTPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>PLANTrees</h3>
          <div className={styles.links}>
            <a href="https://storymaps.arcgis.com/stories/6eef07bdbf1941dd82a4b3b3f1b00fdf" className={styles.link} target="_blank">
              Demo
            </a>
          </div>
        </div>
        <div className={styles.prjcontainer}>
          <img
            src={triangPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Drawing Triangles</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/DrawingTriangles" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
        <div className={styles.prjcontainer}>
          <img
            src={WPPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Wall Plotter</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/WallPlotter" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div><div className={styles.prjcontainer}>
          <img
            src={EBCPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Eyeblink Counter & Frequency Calculator</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/EyeBlinkCounterAndFrequency" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
        <div className={styles.prjcontainer}>
          <img
            src={ClockPic}
            alt={`Image of project`}
            className={styles.image}
          />
          <h3 className={styles.prjtitle}>Clock</h3>
          <div className={styles.links}>
            <a href="https://github.com/bnnguyen/Clock_Ver1" className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from "react";

import styles from "./About.module.css";
import college from '../../assets/about/college.png'
import aboutImg from '../../assets/about/myImage.jpg'
import cursorIcon from '../../assets/about/cursorIcon.png'
import serverIcom from '../../assets/about/serverIcon.png'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={college}
              alt="Cursor icon"
              width={60}
            />
            <div className={styles.aboutItemText}>
              <h3>Vellore Institute Of Technology Bhopal (2021 - 2025)</h3>
              <p>
                B.Tech in Computer Science Engineering with Specialization in
                Gaming Technology.
              </p>
              <p>CGPA : 8.87 / 10</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcom} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
        <img
          src={aboutImg}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};

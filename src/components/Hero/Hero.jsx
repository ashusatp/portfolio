import React from "react";

import styles from "./Hero.module.css";
import hero from "../../assets/hero/heroImg.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashutosh</h1>
        <p className={styles.description}>I'm a full-stack developer.</p>
        <a href="mailto:ashudev0987@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={hero} alt="Hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

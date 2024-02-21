import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from '../../assets/contact/emailIcon.png'
import github from '../../assets/contact/githubIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:ashudev0987@gmail.com">ashudev0987@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/ashutosh-satapathy-44b28721b">
            linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/ashusatp">ashusatp</a>
        </li>
      </ul>
    </footer>
  );
};

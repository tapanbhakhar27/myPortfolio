import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tapanbhakhar@gmail.com">tapanbhakhar@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/tapanbhakhar-27102003-tpn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tapan Bhakhar
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/tapanbhakhar27"
            target="_blank"
            rel="noopener noreferrer"
          >
            tapanbhakhar27
          </a>
        </li>
        <li className={styles.link}>
          {/* <img src={getImageUrl("contact/resumeIcon.png")} alt="Resume icon" /> */}
          <a
            href="https://drive.google.com/file/d/1KLzJNMlzB5Knv3oqxVnODu8_cBOxuHot/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            View Resume
          </a>
        </li>
      </ul>
    </footer>
  );
};

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I specialize in building scalable web applications with 1 year
                of professional experience. I work with Next.js and React on the
                frontend, creating responsive and user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Specialist</h3>
              <p>
                I develop robust RESTful APIs using NestJS and Node.js,
                following MVC architecture. I implement secure authentication
                with JWT and work with both SQL and NoSQL databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Code icon" />
            <div className={styles.aboutItemText}>
              <h3>Modern Tech Stack</h3>
              <p>
                I'm proficient in TypeScript, PostgreSQL, MongoDB, and modern
                tools like TailwindCSS. I focus on clean code, performance
                optimization, and delivering end-to-end features.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

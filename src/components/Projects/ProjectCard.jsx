import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {description.length > 100 && (
          <button className={styles.readMore} onClick={openModal}>
            Read More
          </button>
        )}

        <ul className={styles.skills}>
          {skills.slice(0, 5).map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
          {skills.length > 5 && (
            <li className={styles.skill}>+{skills.length - 5}</li>
          )}
        </ul>

        <div className={styles.links}>
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.modalImage}
            />
            <h3 className={styles.modalTitle}>{title}</h3>
            <p className={styles.modalDescription}>{description}</p>
            <ul className={styles.modalSkills}>
              {skills.map((skill, id) => (
                <li key={id} className={styles.modalSkill}>
                  {skill}
                </li>
              ))}
            </ul>
            <div className={styles.modalLinks}>
              <a
                href={demo}
                className={styles.modalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={source}
                className={styles.modalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

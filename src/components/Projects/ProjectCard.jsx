import { ExternalLink, Github } from "lucide-react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const initial = title.charAt(0).toUpperCase();

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap} aria-hidden="true">
        {imageSrc ? (
          <img
            src={getImageUrl(imageSrc)}
            alt=""
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>{initial}</span>
          </div>
        )}
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className={styles.links}>
          {demo && demo !== "#" && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <Github size={16} />
            Source
          </a>
        </div>
      </div>
    </article>
  );
};

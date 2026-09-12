import { Briefcase, GraduationCap } from "lucide-react";
import history from "../../data/history.json";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <SectionHeading
        label="Career"
        title="Experience & Education"
        subtitle="A timeline of the roles and learning that shaped how I build software today."
      />

      <div className={styles.timeline}>
        {history.map((item, index) => {
          const isEducation = item.type === "education";
          const Icon = isEducation ? GraduationCap : Briefcase;

          return (
            <article
              key={`${item.role}-${item.organisation}`}
              className={`${styles.item} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.node}>
                <div className={styles.dot}>
                  <Icon size={16} />
                </div>
              </div>

              <div className={styles.card}>
                <span className={styles.type}>
                  {isEducation ? "Education" : "Work"}
                </span>
                <h3>{item.role}</h3>
                <p className={styles.org}>{item.organisation}</p>
                {item.startDate && item.endDate && (
                  <p className={styles.dates}>
                    {item.startDate} — {item.endDate}
                  </p>
                )}
                <ul>
                  {item.experiences.map((exp) => (
                    <li key={exp}>{exp}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

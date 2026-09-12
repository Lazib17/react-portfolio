import skills from "../../data/skills.json";
import { getSimpleIcon } from "../../utils/icons";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <SectionHeading
        label="Tech Stack"
        title="My Tech Arsenal"
        subtitle="The tools and technologies I use to build reliable, modern software."
      />

      <div className={styles.categories}>
        {skills.map((group) => (
          <div key={group.category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <div className={styles.pills}>
              {group.items.map((item) => {
                const Icon = getSimpleIcon(item.icon);
                return (
                  <div key={item.name} className={styles.pill} title={item.name}>
                    <Icon className={styles.pillIcon} size={18} aria-hidden="true" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

import { Cloud, Code2, Layout } from "lucide-react";
import profile from "../../data/profile.json";
import { getImageUrl } from "../../utils";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import styles from "./About.module.css";

const HIGHLIGHTS = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "I craft responsive, accessible interfaces with React — optimized for performance and built to scale.",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "I build fast APIs and server-side systems with Node.js and Python, designed for reliability and clarity.",
  },
  {
    icon: Cloud,
    title: "Full-Stack Delivery",
    description:
      "From database to deployment, I connect every layer into cohesive products that ship on time.",
  },
];

export const About = () => {
  return (
    <AnimatedSection id="about">
      <SectionHeading
        label="About"
        title="Who I Am"
        subtitle="A developer who bridges business goals with clean, scalable code."
      />

      <div className={styles.layout}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatarRing}>
            <div className={styles.avatar}>
              <img
                src={getImageUrl("about/my-pic.jpg")}
                alt={profile.name}
                className={styles.avatarImage}
              />
            </div>
          </div>
          <p className={styles.location}>{profile.location}</p>
        </div>

        <div className={styles.bio}>
          <p>{profile.bio}</p>
          <p className={styles.role}>{profile.title}</p>
        </div>
      </div>

      <div className={styles.cards}>
        {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
          <article key={title} className={styles.card}>
            <div className={styles.cardIcon}>
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
};

import { ChevronDown, Download } from "lucide-react";
import {
  SiCss,
  SiFlask,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import profile from "../../data/profile.json";
import { TypedText } from "../common/TypedText";
import styles from "./Hero.module.css";

const TECH_BADGES = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiFlask, label: "Flask" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiCss, label: "CSS" },
];

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.orbOne} aria-hidden="true" />
      <div className={styles.orbTwo} aria-hidden="true" />
      <div className={styles.orbThree} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.greeting}>
          Hi, I'm <span>{profile.name}</span>
        </p>

        <h1 className={styles.headline}>
          I Build Digital
          <br />
          <span className={styles.gradient}>Solutions That Scale</span>
        </h1>

        <p className={styles.subheadline}>
          <TypedText words={profile.roles} />
        </p>

        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            View My Work
          </a>
          <a
            href={profile.cvUrl}
            className={styles.secondaryBtn}
            download="Lazib-Hossain-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className={styles.badges}>
          {TECH_BADGES.map(({ Icon, label }) => (
            <div key={label} className={styles.badge} title={label}>
              <Icon aria-label={label} />
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to about">
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

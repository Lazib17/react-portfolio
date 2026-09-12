import { Github, Linkedin, Mail } from "lucide-react";
import profile from "../../data/profile.json";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>{profile.initials}</span>
            <span>{profile.name}</span>
          </div>
          <p>{profile.tagline}</p>
        </div>

        <nav className={styles.nav}>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.social}>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

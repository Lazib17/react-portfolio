import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../../data/profile.json";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.navbar}>
        <a className={styles.logo} href="#home" onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMark}>{profile.initials}</span>
          <span className={styles.logoText}>{profile.name.split(" ")[0]}</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <a
              href="#contact"
              className={styles.cta}
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        <a href="#contact" className={`${styles.cta} ${styles.desktopCta}`}>
          Get in Touch
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

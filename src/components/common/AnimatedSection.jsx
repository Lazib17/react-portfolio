import styles from "./AnimatedSection.module.css";

export const AnimatedSection = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {children}
    </section>
  );
};

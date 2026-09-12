import styles from "./SectionHeading.module.css";

export const SectionHeading = ({ label, title, subtitle }) => {
  return (
    <div className={styles.heading}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

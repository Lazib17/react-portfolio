import services from "../../data/services.json";
import { getLucideIcon } from "../../utils/icons";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <AnimatedSection id="services" className={styles.section}>
      <SectionHeading
        label="Services"
        title="What I Offer"
        subtitle="Focused expertise across the full stack — from concept to production."
      />

      <div className={styles.grid}>
        {services.map((service) => {
          const Icon = getLucideIcon(service.icon);
          return (
            <article key={service.id} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.glow} aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

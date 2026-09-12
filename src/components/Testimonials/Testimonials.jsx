import { Quote } from "lucide-react";
import testimonials from "../../data/testimonials.json";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import styles from "./Testimonials.module.css";

export const Testimonials = () => {
  return (
    <AnimatedSection id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
        subtitle="Feedback from people I've worked with on real projects."
      />

      <div className={styles.grid}>
        {testimonials.map((item) => (
          <blockquote key={item.name} className={styles.card}>
            <Quote className={styles.quoteIcon} size={28} aria-hidden="true" />
            <p>"{item.quote}"</p>
            <footer>
              <cite>{item.name}</cite>
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </AnimatedSection>
  );
};

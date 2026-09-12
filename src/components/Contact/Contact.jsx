import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import profile from "../../data/profile.json";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Build Something"
        subtitle="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
      />

      <div className={styles.layout}>
        <div className={styles.info}>
          <ul className={styles.links}>
            <li>
              <Mail size={20} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Linkedin size={20} />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <Github size={20} />
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <MapPin size={20} />
              <span>{profile.location}</span>
            </li>
          </ul>

          <div className={styles.availability}>
            <span className={styles.statusDot} />
            Available for freelance & full-time opportunities
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="What's this about?"
            />
          </label>

          <label className={styles.field}>
            <span>Message</span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
            />
          </label>

          <button type="submit" className={styles.submitBtn}>
            <Send size={18} />
            {submitted ? "Opening email..." : "Send Message"}
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
};

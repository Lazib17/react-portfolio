import { useMemo, useState } from "react";
import projects from "../../data/projects.json";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeading } from "../common/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Fullstack" },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <AnimatedSection id="projects">
      <SectionHeading
        label="Portfolio"
        title="Things I've Built"
        subtitle="Selected projects showcasing full-stack development, clean architecture, and real-world problem solving."
      />

      <div className={styles.filters}>
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`${styles.filterBtn} ${
              activeFilter === filter.id ? styles.filterActive : ""
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

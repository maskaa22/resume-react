import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import c from "./ProjectCard.module.css";

const ProjectCard = forwardRef(function ProjectCard({ project, featured = false }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`${c.card} ${featured ? c.featured : ""}`}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={c.link}
        aria-label={`${project.title} — opens in a new tab`}
      >
        <div className={c.media}>
          <img
            src={project.foto}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            width="1200"
            height="900"
            className={c.img}
          />
          <ul className={c.tags}>
            {project.skills.slice(0, 3).map((skill) => (
              <li key={skill}>{skill.replace("#", "").replace("_", " ")}</li>
            ))}
          </ul>
        </div>

        <div className={c.body}>
          <div className={c.top}>
            <div>
              <h3 className={c.title}>{project.title}</h3>
              <p className={c.date}>{project.data}</p>
            </div>
            <span className={c.arrow}>
              <FiArrowUpRight />
            </span>
          </div>
          <p className={c.text}>{project.text}</p>
        </div>
      </a>
    </motion.article>
  );
});

export default ProjectCard;

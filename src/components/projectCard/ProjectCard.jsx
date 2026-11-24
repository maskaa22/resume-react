import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import c from "./ProjectCard.module.css";

const ProjectCard = forwardRef(function ProjectCard({ project, featured = false }, ref) {
  // a project without a live URL still renders, just not as a link
  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? {
        href: project.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.title} — opens in a new tab`,
      }
    : {};

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
      <Wrapper className={c.link} {...linkProps}>
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
            {project.url && (
              <span className={c.arrow}>
                <FiArrowUpRight />
              </span>
            )}
          </div>
          <p className={c.text}>{project.text}</p>
        </div>
      </Wrapper>
    </motion.article>
  );
});

export default ProjectCard;

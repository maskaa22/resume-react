import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { projects } from "../../constants";
import ProjectCard from "../projectCard/ProjectCard";
import Reveal from "../reveal/Reveal";
import c from "./Projects.module.css";

const ALL = "all";

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [expanded, setExpanded] = useState(false);

  const filters = useMemo(() => {
    const counts = {};
    projects.forEach((p) =>
      p.skills.forEach((s) => {
        counts[s] = (counts[s] || 0) + 1;
      })
    );
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag, count]) => ({ tag, count }));
  }, []);

  const filtered =
    filter === ALL ? projects : projects.filter((p) => p.skills.includes(filter));
 
  const visible = filter === ALL ? 8 : 6;
  const shown = expanded ? filtered : filtered.slice(0, visible);
  const hidden = filtered.length - shown.length;

  const pick = (tag) => {
    setFilter(tag);
    setExpanded(false);
  };

  return (
    <section id="projects" className={`section ${c.projects}`}>
      <div className="container">
        <Reveal className="sectionHead split">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow">Projects</span>
            <h2 className="sectionTitle" style={{ maxWidth: "none" }}>
              Things I’ve <em>built</em>{" "}
              <br className="titleBreak" />
              and shipped
            </h2>
          </div>

          <div className={c.filters} role="group" aria-label="Filter projects">
            <button
              type="button"
              className={`${c.chip} ${filter === ALL ? c.chipActive : ""}`}
              onClick={() => pick(ALL)}
              aria-pressed={filter === ALL}
            >
              All <sup>{projects.length}</sup>
            </button>
            {filters.map(({ tag, count }) => (
              <button
                key={tag}
                type="button"
                className={`${c.chip} ${filter === tag ? c.chipActive : ""}`}
                onClick={() => pick(tag)}
                aria-pressed={filter === tag}
              >
                {tag.replace("#", "").replace("_", " ")} <sup>{count}</sup>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className={c.grid}>
          <AnimatePresence mode="popLayout">
            {shown.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={i === 0 && filter === ALL}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {(hidden > 0 || (expanded && filtered.length > visible)) && (
          <div className={c.more}>
            <button
              type="button"
              className="btn btnGhost"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Show less" : `See all ${filtered.length} projects`}
              <FiArrowDown
                style={{
                  transform: expanded ? "rotate(180deg)" : "none",
                  transition: "transform .3s",
                }}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

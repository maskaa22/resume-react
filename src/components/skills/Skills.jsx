import { useRef } from "react";
import { services } from "../../constants";
import Reveal from "../reveal/Reveal";
import GlowCard from "../glowCard/GlowCard";
import useGlowPointer from "../glowCard/useGlowPointer";
import c from "./Skills.module.css";

export default function Skills() {
  const gridRef = useRef(null);
  useGlowPointer(gridRef);

  return (
    <section id="skills" className={`section ${c.skills}`}>
      <div className="container">
        <Reveal className="sectionHead split">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow">What I do</span>
            <h2 className="sectionTitle" style={{ maxWidth: "none" }}>
              Everything a web
              <br />
              product <em>needs</em>
            </h2>
          </div>
          <p className="sectionLead">
            Six areas I work in — from the first sketch in Figma to a deployed,
            documented full-stack app.
          </p>
        </Reveal>

        <ul className={c.grid} ref={gridRef}>
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 0.08} className={c.item}>
              <GlowCard className={c.card}>
                <span className={c.num}>{String(s.id).padStart(2, "0")}</span>
                <h3 className={c.title}>{s.title}</h3>
                <p className={c.text}>{s.text}</p>
                <ul className={c.tags}>
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

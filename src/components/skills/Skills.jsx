import Marquee from "react-fast-marquee";
import { services, skillsTape } from "../../constants";
import Reveal from "../reveal/Reveal";
import c from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={c.skills}>
      {/* tilted tape */}
      <div className={c.tapeWrap} aria-hidden="true">
        <div className={c.tape}>
          <Marquee speed={45} gradient={false} autoFill>
            {skillsTape.map((item) => (
              <span key={item} className={c.tapeItem}>
                {item}
                <i className={c.star}>✦</i>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className={`container ${c.body}`}>
        <Reveal className="sectionHead split">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow">What I do</span>
            <h2 className="sectionTitle" style={{ maxWidth: "13ch" }}>
              Everything a web product <em>needs</em>
            </h2>
          </div>
          <p className="sectionLead">
            Six areas I work in — from the first sketch in Figma to a deployed,
            documented full-stack app.
          </p>
        </Reveal>

        <ul className={c.grid}>
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 0.08} className={c.card}>
              <span className={c.num}>{String(s.id).padStart(2, "0")}</span>
              <h3 className={c.title}>{s.title}</h3>
              <p className={c.text}>{s.text}</p>
              <ul className={c.tags}>
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

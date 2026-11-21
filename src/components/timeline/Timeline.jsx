import { education, experience } from "../../constants";
import Reveal from "../reveal/Reveal";
import c from "./Timeline.module.css";

function Column({ title, items }) {
  return (
    <div className={c.column}>
      <Reveal as="h3" className={`hand ${c.colTitle}`}>
        {title}
      </Reveal>
      <ol className={c.list}>
        {items.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.08} className={c.item}>
            <span className={c.dot} />
            <article className={`${c.card} glass`}>
              <span className={c.date}>{item.data}</span>
              <h4 className={c.name}>{item.title}</h4>
              <p className={c.role}>{item.name}</p>
              <p className={c.text}>{item.text}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className={`section ${c.timeline}`}>
      <div className="container">
        <Reveal className="sectionHead split">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow">Experience</span>
            <h2 className="sectionTitle" style={{ maxWidth: "14ch" }}>
              My <em>journey</em> so far
            </h2>
          </div>
          <p className="sectionLead">
            From a technical security engineer to a full-stack developer —
            learning by building real things, together with real teams.
          </p>
        </Reveal>

        <div className={c.cols}>
          <Column title="Experience" items={experience} />
          <Column title="Education" items={education} />
        </div>
      </div>
    </section>
  );
}

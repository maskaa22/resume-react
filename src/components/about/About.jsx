import { projects } from "../../constants";
import Reveal from "../reveal/Reveal";
import c from "./About.module.css";

const uniqueProjects = new Set(projects.map((p) => p.url)).size;

const stats = [
  { value: `${uniqueProjects}`, suffix: "+", label: "projects built\nand published" },
  { value: "2023", label: "year I started\nlearning web dev" },
  { value: "2", label: "teams I write code\nwith right now" },
  { value: "3", label: "schools & courses\nbehind my skills" },
];

export default function About() {
  return (
    <section className={`section ${c.about}`} id="about">
      <div className="container">
        <div className={c.inner}>
          <Reveal className={c.visual}>
            <div className={c.frame}>
              <img
                className={c.img}
                src="./about/about-cutout.png"
                alt="Mariia Skydan"
                width="912"
                height="1244"
                loading="lazy"
              />
            </div>
            <span className={`hand ${c.sticker}`}>just me, coding ✦</span>
            <div className={`${c.badge} glass`}>
              <strong>Master’s</strong>
              <span>
                in Computer
                <br />
                Science
              </span>
            </div>
          </Reveal>

          <div className={c.info}>
            <Reveal className="sectionHead" style={{ marginBottom: 28 }}>
              <span className="eyebrow">About</span>
              <h2 className="sectionTitle" style={{ maxWidth: "12ch" }}>
                Clean code, <em>thoughtful</em> design
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className={c.text}>
                My name is Maria, I’m 29 years old. I enjoy fishing, foraging
                mushrooms, and coding for hours on end. I’m highly motivated,
                detail-oriented, and always eager to learn and take on new
                challenges. I don’t give up easily and stay focused until the
                job is done.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className={c.quote}>
                “Small steps, big dreams.”
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal as="ul" className={c.stats} delay={0.1}>
          {stats.map((s) => (
            <li key={s.label} className={c.stat}>
              <span className={c.value}>
                {s.value}
                {s.suffix && <em>{s.suffix}</em>}
              </span>
              <span className={c.label}>{s.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

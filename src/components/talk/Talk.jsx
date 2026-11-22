import { FiArrowUpRight } from "react-icons/fi";
import { contacts } from "../../constants";
import Icon from "../icon/Icon";
import Reveal from "../reveal/Reveal";
import c from "./Talk.module.css";

export default function Talk() {
  return (
    <section id="contact" className={`section ${c.contact}`}>
      <div className="container">
        <div className={c.grid}>
          <Reveal>
            <div className="sectionHead" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Contact</span>
              <h2 className="sectionTitle" style={{ maxWidth: "11ch" }}>
                Tell me about your <em>project</em>
              </h2>
              <p className="sectionLead">
                Write to me directly — I’ll get back to you with next steps.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className={c.links}>
              {contacts.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={c.link}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      <span className={c.linkIcon}>
                        <Icon name={item.icon} />
                      </span>
                      <span className={c.linkText}>
                        <small>{item.label}</small>
                        {item.value}
                      </span>
                      <span className={c.linkArrow}>
                        <FiArrowUpRight />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

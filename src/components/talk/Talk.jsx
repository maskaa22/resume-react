import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { contacts, projectTypes } from "../../constants";
import Reveal from "../reveal/Reveal";
import c from "./Talk.module.css";

const icons = {
  email: MdOutlineMail,
  telegram: PiTelegramLogoLight,
  github: FiGithub,
  linkedin: FiLinkedin,
};

const EMAIL = "kyrosika565@gmail.com";

export default function Talk() {
  const [type, setType] = useState(projectTypes[0]);
  const [sent, setSent] = useState(false);

  // No back-end: the form opens the visitor's mail app with everything filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`${type} — message from ${name}`);
    const body = encodeURIComponent(
      `${message || ""}\n\n— ${name}\n${email}\nProject type: ${type}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* big call-to-action */}
      <section className={c.ctaSection}>
        <div className="container">
          <Reveal className={c.cta}>
            <div className={c.ctaText}>
              <span className="eyebrow">Open to new opportunities</span>
              <h2 className={c.ctaTitle}>
                Let’s create a website — <em>together</em>
              </h2>
              <div className={c.ctaRow}>
                <a href="#contact-form" className="btn btnPrimary">
                  Write me a message <FiArrowUpRight />
                </a>
                <span className={c.ctaNote}>I usually reply within a day</span>
              </div>
            </div>
            <div className={c.ctaPhoto}>
              <div className={c.ctaCircle} />
              <img
                src="./hero/hero-cutout.png"
                alt=""
                loading="lazy"
                width="733"
                height="1285"
              />
            </div>
            <span className={`hand ${c.ctaHand}`}>say hi ✦</span>
          </Reveal>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className={`section ${c.contact}`}>
        <div className="container">
          <div className={c.grid}>
            <Reveal>
              <div className="sectionHead" style={{ marginBottom: 32 }}>
                <span className="eyebrow">Contact</span>
                <h2 className="sectionTitle" style={{ maxWidth: "11ch" }}>
                  Tell me about your <em>project</em>
                </h2>
                <p className="sectionLead">
                  Fill in the form or write directly — I’ll get back to you with
                  next steps.
                </p>
              </div>

              <ul className={c.links}>
                {contacts.map((item) => {
                  const Icon = icons[item.id];
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={c.link}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        <span className={c.linkIcon}>
                          <Icon />
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

            <Reveal delay={0.12}>
              <form
                id="contact-form"
                className={`${c.form} glass`}
                onSubmit={onSubmit}
              >
                <h3 className={`hand ${c.formTitle}`}>Send a message</h3>

                <div className={c.fields}>
                  <label className={c.field}>
                    <span>Name *</span>
                    <input name="name" required placeholder="Your name" autoComplete="name" />
                  </label>
                  <label className={c.field}>
                    <span>E-mail *</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </label>
                </div>

                <fieldset className={c.types}>
                  <legend>Project type</legend>
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`${c.type} ${type === t ? c.typeActive : ""}`}
                      onClick={() => setType(t)}
                      aria-pressed={type === t}
                    >
                      {t}
                    </button>
                  ))}
                </fieldset>

                <label className={c.field}>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell me about your idea, timing and what you need…"
                  />
                </label>

                <button type="submit" className={`btn btnPrimary ${c.submit}`}>
                  Send <FiArrowUpRight />
                </button>
                <p className={c.hint} aria-live="polite">
                  {sent
                    ? "Opening your mail app… if nothing happens, write to " + EMAIL
                    : "Your data stays with you — nothing is stored on this site."}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

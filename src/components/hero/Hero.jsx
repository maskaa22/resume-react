import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { heroTools } from "../../constants";
import { techIcons } from "../../constants/techIcons";
import c from "./Hero.module.css";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className={c.hero} id="hero">
      <div className={`container ${c.grid}`}>
        <div className={c.left}>
          <motion.h1 className={c.h1} {...rise(0.1)}>
            <span>Mariia</span>
            <span>Skydan</span>
          </motion.h1>

          <motion.p className={c.role} {...rise(0.2)}>
            Full Stack Developer
            <span className={`eyebrow ${c.status}`}>Open to work</span>
          </motion.p>

          <motion.p className={c.text} {...rise(0.28)}>
            Focused on building modern web applications from frontend to
            backend. I combine strong problem-solving skills with a practical
            approach to development, writing clean, maintainable code and
            creating reliable solutions. Always looking for opportunities to
            grow, take ownership, and contribute to a collaborative team.
          </motion.p>

          <motion.div className={c.actions} {...rise(0.4)}>
            <a
              href="/files/MarriaSkydan_FullStack.pdf"
              download
              className="btn btnPrimary"
            >
              Download Resume <FiArrowDown />
            </a>
            <a href="#contact" className="btn btnGhost">
              Contact me <FiArrowUpRight />
            </a>
          </motion.div>
        </div>

        <motion.div
          className={c.stage}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={c.blob} />
          <div className={c.blobRing} />
          <img
            className={c.photo}
            src="./hero/hero-cutout.png"
            alt="Mariia Skydan"
            width="733"
            height="1285"
            // React 18 only knows the lowercase attribute (fetchPriority needs React 19)
            // eslint-disable-next-line react/no-unknown-property
            fetchpriority="high"
          />
        </motion.div>

        <div className={c.right}>
          <motion.div className={`${c.card} glass`} {...rise(0.3)}>
            <h2 className={`display ${c.cardTitle}`}>My Tech Stack</h2>
            <ul className={c.tools}>
              {heroTools.map((name) => {
                const Icon = techIcons[name];
                return (
                  <li key={name} className={c.toolItem}>
                    <span className={c.toolIcon}>
                      <Icon />
                    </span>
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

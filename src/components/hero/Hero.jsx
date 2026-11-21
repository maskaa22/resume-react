import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { heroTools } from "../../constants";
import { techIcons } from "../../constants/techIcons";
import c from "./Hero.module.css";

const float = (delay = 0, amp = 9) => ({
  animate: { y: [0, -amp, 0] },
  transition: {
    duration: 5.5 + delay,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function Squiggle({ className }) {
  return (
    <svg className={className} viewBox="0 0 90 28" fill="none" aria-hidden="true">
      <path
        d="M2 18c14-12 28-12 40-4s26 6 46-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CurvedArrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 70 50" fill="none" aria-hidden="true">
      <path
        d="M3 6c24-6 52 6 54 32M57 38l-9-9M57 38l8-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={c.hero} id="hero">
      <div className={`container ${c.grid}`}>
        {/* ───── left: intro ───── */}
        <div className={c.left}>
          <motion.p className={`hand ${c.noteTop}`} {...rise(0.05)}>
            Creative mind,
            <br />
            coding better
            <CurvedArrow className={c.noteArrow} />
          </motion.p>

          <motion.h1 className={c.h1} {...rise(0.1)}>
            <span>Mariia</span>
            <span>Skydan</span>
            <Squiggle className={c.squiggle} />
          </motion.h1>

          <motion.p className={c.role} {...rise(0.2)}>
            Full Stack Developer
          </motion.p>

          <motion.p className={c.text} {...rise(0.28)}>
            Junior Full Stack Developer with experience in building dynamic and
            responsive web applications. Proficient in React, Node.js,
            TypeScript, JavaScript, and MongoDB. Strong problem-solving skills,
            collaborative team player, passionate about learning new
            technologies and improving development workflows.
          </motion.p>

          <motion.ul className={c.pills} {...rise(0.34)}>
            <li className="pill">React</li>
            <li className="pill">Node.js</li>
            <li className="pill">TypeScript</li>
          </motion.ul>

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

          <motion.div className={c.foot} {...rise(0.48)}>
            <a href="#about" className={c.scroll} aria-label="Scroll to about">
              <span className={c.scrollBtn}>
                <FiArrowDown />
              </span>
              <span>Scroll to discover more</span>
            </a>
            <ul className={c.social}>
              <li>
                <a href="https://github.com/maskaa22" aria-label="GitHub">
                  <FiGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mariia-skydan"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto:kyrosika565@gmail.com" aria-label="E-mail">
                  <MdOutlineMail />
                </a>
              </li>
              <li>
                <a href="https://t.me/maskaa22" aria-label="Telegram">
                  <PiTelegramLogoLight />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ───── centre: photo collage ───── */}
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
            fetchpriority="high"
          />

          <motion.div className={`${c.tile} ${c.tileA}`} {...float(0, 10)}>
            {(() => {
              const Icon = techIcons.Figma;
              return <Icon />;
            })()}
          </motion.div>
          <motion.div className={`${c.tile} ${c.tileB}`} {...float(0.8, 12)}>
            {(() => {
              const Icon = techIcons.React;
              return <Icon />;
            })()}
          </motion.div>

          <HiOutlineSparkles className={`${c.spark} ${c.sparkA}`} />
          <HiOutlineSparkles className={`${c.spark} ${c.sparkB}`} />

          <p className={`hand ${c.noteTools}`}>
            React, Figma
            <br />& more
          </p>

          <motion.div className={c.polaroid} {...float(0.4, 6)}>
            <div className={c.polaroidImg}>
              <img src="./about/about-cutout.png" alt="" loading="lazy" />
            </div>
            <p className={`hand ${c.polaroidCap}`}>coding, fishing &amp; mushrooms</p>
          </motion.div>

          <motion.div className={`${c.codeCard} glass`} {...float(1.2, 7)}>
            <span className={c.codeTag}>&lt;/&gt;</span>
            <p>
              Code
              <br />+ Design
              <br />= Better Experiences
            </p>
          </motion.div>
        </motion.div>

        {/* ───── right: info cards ───── */}
        <div className={c.right}>
          <motion.div className={`${c.card} glass`} {...rise(0.3)}>
            <h2 className={`hand ${c.cardTitle}`}>My Tech Stack</h2>
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

          <motion.div className={`${c.card} glass`} {...rise(0.42)}>
            <h2 className={`hand ${c.cardTitle}`}>Currently</h2>
            <ul className={c.now}>
              <li>
                <span className={c.nowDot} />
                <div>
                  <strong>Frontend Developer</strong>
                  <span>Pythons Team · 2025 — now</span>
                </div>
              </li>
              <li>
                <span className={c.nowDot} />
                <div>
                  <strong>Frontend Developer</strong>
                  <span>VerbUp · 2025 — now</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div className={`${c.card} ${c.note} glass`} {...rise(0.54)}>
            <h2 className={`hand ${c.cardTitle}`}>More about me</h2>
            <p>
              I love exploring new ideas, learning modern tools and turning
              them into meaningful digital products. Always open to new
              opportunities and exciting projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

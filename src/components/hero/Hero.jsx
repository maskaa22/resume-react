import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import c from "./Hero.module.css";

export default function Hero() {
  return (
    <div className="container">
      <section className={c.hero} id="hero">
        <div className={c.info}>
          <h1 className={c.h1}>
            <span>Mariia</span> Skydan
          </h1>
          <p className={c.title}>Full Stack Developer</p>
          <p className={c.text}>
            Junior Full Stack Developer with experience in building dynamic and
            responsive web applications. Proficient in React, Node.js,
            TypeScript, JavaScript, and MongoDB.
            <span>
              Strong problem-solving skills, collaborative team player, and
              passionate about learning new technologies, improving development
              workflows, and continuous self-development
            </span>
          </p>
          <div className={c.buttonContainer}>
            <a href="/files/MarriaSkydan_FullStack.pdf" download className={c.download}>
              Download Resume
            </a>
            <a className={c.talk} href="#contact">Contact Me</a>
          </div>
          <ul className={c.social}>
            <li>
              <a href="https://github.com/maskaa22">
                <FiGithub className={c.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mariia-skydan">
                <FiLinkedin className={c.icon} />
              </a>
            </li>
            <li>
              <a href="mailto:kyrosika565@gmail.com">
                <MdOutlineMail className={c.icon} />
              </a>
            </li>
            <li>
              <a href="https://t.me/maskaa22">
                <PiTelegramLogoLight className={c.icon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={c.foto}>
          <picture>
            <source
              srcSet="
                ./hero/hero-x1.png    1x,
                ./hero/hero-x2.png 2x
              "
            />
            <img src="./hero/hero-x1.png" alt="Mariia Skydan" />
          </picture>
        </div>
      </section>
    </div>
  );
}

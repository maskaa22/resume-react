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
            <button className={c.download}>Download Resume</button>
            <button className={c.talk}>Contact Me</button>
          </div>
          <div className={c.social}>
            <FiGithub className={c.icon}/>
            <FiLinkedin className={c.icon}/>
            <MdOutlineMail className={c.icon}/>
            <PiTelegramLogoLight className={c.icon}/>
          </div>
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

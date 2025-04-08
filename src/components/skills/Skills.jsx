import c from "./Skills.module.css";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <section id="skills" className={c.skills}>
      <ul>
        <Marquee speed={50} gradient={false} className={c.marquee}>
          <li><span className={c.item}>JAVASCRIPT</span> </li>
          <li><span className={c.item}>TYPESCRIPT</span> </li>
          <li><span className={c.item}>REACT</span> </li>
          <li><span className={c.item}>NODE</span> </li>
          <li><span className={c.item}>FIGMA</span> </li>
          <li><span className={c.item}>SWAGGER</span> </li>
          <li><span className={c.item}>HTML</span> </li>
          <li><span className={c.item}>CSS</span> </li>
        </Marquee>
      </ul>
    </section>
  );
}

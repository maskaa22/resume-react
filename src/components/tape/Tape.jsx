import Marquee from "react-fast-marquee";
import { skillsTape } from "../../constants";
import c from "./Tape.module.css";

export default function Tape() {
  return (
    <div className={c.tape} aria-hidden="true">
      <Marquee speed={45} gradient={false} autoFill>
        {skillsTape.map((item) => (
          <span key={item} className={c.item}>
            {item}
            <i className={c.star}>✦</i>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

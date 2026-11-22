import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { skillsTape } from "../../constants";
import c from "./Tape.module.css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export default function Tape() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className={c.tape} aria-hidden="true">
      <Marquee speed={45} gradient={false} autoFill play={!reduced}>
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

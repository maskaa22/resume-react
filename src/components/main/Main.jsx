import Hero from "../hero/Hero";
import Tape from "../tape/Tape";
import Skills from "../skills/Skills";
import Timeline from "../timeline/Timeline";
import Projects from "../projects/Projects";
import Talk from "../talk/Talk";

export default function Main() {
  return (
    <main>
      <Hero />
      <Projects />
      <Timeline />
      <Tape />
      <Skills />
      <Talk />
    </main>
  );
}

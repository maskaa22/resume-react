import Hero from "../hero/Hero";
import About from "../about/About";
import Skills from "../skills/Skills";
import Timeline from "../timeline/Timeline";
import Projects from "../projects/Projects";
import Talk from "../talk/Talk";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Talk />
    </main>
  );
}

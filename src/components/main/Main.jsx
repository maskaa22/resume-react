import "./Main.module.css";
import Hero from "../hero/Hero";
import About from "../about/About";
import Skills from "../skills/Skills";
import Educations from "../educations/Educations";

export default function Main() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Educations/>
    </>
  );
}

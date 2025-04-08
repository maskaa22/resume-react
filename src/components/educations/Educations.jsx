import { education, experience } from "../../contacts";
import AccordionContainer from "../accordionContainer/AccordionContainer";
import c from "./Educations.module.css";



export default function Educations() {
  return (
    <section id="education" className={c.education}>
      <div className="container">
        <h2 className={c.title}>Experience</h2>

        <div className={c.flex}>
          <AccordionContainer title="Education" accordItem={education} />
          <AccordionContainer title="Experience"  accordItem={experience}/>
        </div>
      </div>
    </section>
  );
}

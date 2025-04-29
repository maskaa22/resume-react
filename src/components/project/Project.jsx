import "./Project.css";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function Project({ project, imagePosition = "rightData" }) {
  const { skills } = project;

  return (
    <div className={`cardProject ${imagePosition}`}>
      <div className="infoProject">
        <div>
          <h3 className="titleProject">{project.title} <p className="dataProject">({project.data})</p></h3>
          <ul className="listProject">
            {skills.map((skill, i) => (
              <li key={i} className="itemProject">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <p className="textProject">{project.text}</p>
        <a href={project.url} className="moreProject">
          <IoArrowRedoOutline className="iconMoreProject" />
        </a>
       
      </div>
      <div className="fotoProject">
        <img src={project.foto} alt={project.alt}/>
      </div>
    </div>
  );
}

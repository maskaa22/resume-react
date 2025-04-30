import c from "./About.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function About() {
  return (
    <section className={c.about} id="about">
      <div className="container">
        <div className={c.inner}>
          <div className={c.foto}>
            <picture>
              <source
                srcSet="
                ./about/about-x1.png    1x,
                ./about/about-x1.png 2x
              "
              />
              <img
                src="./about/about-x1.png"
                alt="Mariia Skydan"
                className={c.img}
              />
            </picture>
          </div>
          <div className={c.info}>
            <h2 className={c.title}>About me</h2>
            <p className={c.text}>
              My name is Maria, I’m 29 years old. I enjoy fishing, foraging
              mushrooms, and coding for hours on end. I'm highly motivated,
              detail-oriented, and always eager to learn and take on new
              challenges. I don't give up easily and stay focused until the job
              is done.
            </p>
            <ul className={c.list}>
              <li className={c.item}>
                <IoMdCheckmarkCircleOutline className={c.icon} />
                Build interactive web interfaces
                <span>/ User Interfaces for the web</span>
              </li>
              <li className={c.item}>
                <IoMdCheckmarkCircleOutline className={c.icon} />
                Create data visualizations
                <span>with Chart.js and Recharts</span>
              </li>
              <li className={c.item}>
                <IoMdCheckmarkCircleOutline className={c.icon} />
                Document and RESTful APIs
                <span>using Swagger and Postman</span>
              </li>
              <li className={c.item}>
                <IoMdCheckmarkCircleOutline className={c.icon} />
                Integration of payment services
                <span>(test-services) such as Stripe</span>
              </li>
              <li className={c.item}>
                <IoMdCheckmarkCircleOutline className={c.icon} />
                Develop back-end services
                <span>with Node.js and Express</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

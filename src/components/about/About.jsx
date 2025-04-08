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
              <img src="./about/about-x1.png" alt="Mariia Skydan"  className={c.img}/>
            </picture>
          </div>
          <div className={c.info}>
            <h2 className={c.title}>About me</h2>
            <p className={c.text}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <ul className={c.list}>
              <li className={c.item}> <IoMdCheckmarkCircleOutline  className={c.icon}/>
                Develop highly interactive Front end <span>/ User Interfaces for the
                web</span>
              </li>
              <li className={c.item}><IoMdCheckmarkCircleOutline  className={c.icon}/>
                Progressive Web Applications ( PWA ) <span>in normal and SPA Stacks</span>
              </li>
              <li className={c.item}><IoMdCheckmarkCircleOutline  className={c.icon}/>
                Integration of third party services such as AWS <span>/ Digital Ocean</span>
              </li>
              <li className={c.item}><IoMdCheckmarkCircleOutline  className={c.icon}/>
                Integration of payment services <span>such as M-Pesa and paypal etc</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import c from "./Talk.module.css";

export default function Talk() {
  return (
    <section id="talk" className={c.talk}>
      <div className="container">
        <div>
          <h2 className={c.title}>Lets create Website - Together</h2>
          <p className={c.text}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
          <form className={c.form}>
            <input placeholder="Enter Your Email" className={c.input} />
            <button className={c.btn}>Contact me</button>
          </form>
        </div>
      </div>
    </section>
  );
}

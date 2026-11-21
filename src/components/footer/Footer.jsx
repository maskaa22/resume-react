import Icon from "../icon/Icon";
import { contacts, navItems } from "../../constants";
import c from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={c.footer}>
      <div className="container">
        <div className={c.top}>
          <div className={c.brand}>
            <a href="#hero" className={c.logo}>
              Mariia <em>Skydan</em>
            </a>
            <p className={c.tagline}>
              Full Stack Developer building thoughtful, fast and friendly web
              products.
            </p>
            <ul className={c.social}>
              <li>
                <a href="https://github.com/maskaa22" aria-label="GitHub">
                  <Icon name="github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mariia-skydan"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" />
                </a>
              </li>
              <li>
                <a href="mailto:kyrosika565@gmail.com" aria-label="E-mail">
                  <Icon name="mail" />
                </a>
              </li>
              <li>
                <a href="https://t.me/maskaa22" aria-label="Telegram">
                  <Icon name="telegram" />
                </a>
              </li>
            </ul>
          </div>

          <nav className={c.col} aria-label="Footer">
            <h4>Navigation</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={c.col}>
            <h4>Contact</h4>
            <ul>
              {contacts.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={c.bottom}>
          <p>
            © {new Date().getFullYear()} Mariia Skydan. All rights reserved.
          </p>
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>

      <div className={c.watermark} aria-hidden="true">
        Mariia Skydan
      </div>
    </footer>
  );
}

import c from "./Footer.module.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className={c.footer}>
      <div className={c.topFooter}>
        <div className="container">
          <div className={c.logo}>
            <span>M</span>ariia <span>S</span>kydan
          </div>

          <ul className={c.menu}>
            <li>about</li>
            <li>skills</li>
            <li>experience</li>
            <li>projects</li>
            <li>contact</li>
          </ul>

          <ul className={c.social}>
            <li>
              <a href="https://github.com/maskaa22">
                <FiGithub className={c.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mariia-skydan">
                <FiLinkedin className={c.icon} />
              </a>
            </li>
            <li>
              <a href="mailto:kyrosika565@gmail.com">
                <MdOutlineMail className={c.icon} />
              </a>
            </li>
            <li>
              <a href="https://t.me/maskaa22">
                <PiTelegramLogoLight className={c.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={c.botFooter}>
        <div className="container">
          <p className={c.copy}>
            © 2025{" "}
            <span>
              <span>M</span>ariia <span>S</span>kydan
            </span>{" "}
            All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

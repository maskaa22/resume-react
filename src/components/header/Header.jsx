import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import c from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <div className="container">
      <header className={c.header}>
        <div className={c.logo}>
          <span>M</span>ariia <span>S</span>kydan
        </div>
        <RxHamburgerMenu
          className={c.burger}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className={`${c.menu} ${isOpen ? c.open : ""}`}>
          <IoIosCloseCircleOutline
            className={c.close}
            onClick={() => setIsOpen(!isOpen)}
          />
          <nav>
            <ul className={c.list}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`${c.item} ${
                    activeItem === index ? c.active : ""
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  <a className={c.link}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

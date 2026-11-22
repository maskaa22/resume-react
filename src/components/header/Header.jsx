import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { navItems, resumeUrl } from "../../constants";
import c from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`${c.wrap} ${scrolled ? c.scrolled : ""}`}>
      <div className="container">
        <div className={c.bar}>
          <a href="#hero" className={c.logo} aria-label="Mariia Skydan — home">
            <span className={c.mark}>MS</span>
            <span className={c.divider} />
            <span className={c.logoText}>Mariia Skydan</span>
          </a>

          <nav
            className={`${c.menu} ${isOpen ? c.open : ""}`}
            aria-label="Main"
          >
            <button
              type="button"
              className={c.close}
              onClick={close}
              aria-label="Close menu"
            >
              <IoClose />
            </button>
            <ul className={c.list}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`${c.link} ${active === item.id ? c.active : ""}`}
                    href={`#${item.id}`}
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={resumeUrl}
              download
              className={c.cta}
              onClick={close}
            >
              Download Resume <FiDownload />
            </a>
          </nav>

          <button
            type="button"
            className={c.burger}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

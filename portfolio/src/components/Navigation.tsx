import React, { useEffect, useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import "@/assets/styles/navigation.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useMobile } from "@/hooks/useMobile";
import { scrollToSection } from "@/utils/scrollToSection";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navLinks = ["home", "about", "projects", "contact"];
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();

  const toggleSideNav = () => {
    setOpen(!open);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.innerText.toLowerCase();
    scrollToSection(target, {onBeforeScroll: toggleSideNav})
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((id) => document.getElementById(id));
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(navLinks[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="navigation">
      <div className="logo">&lt;Elijah /&gt;</div>
      <nav className="navbar">
        {navLinks.map((id) => (
          <a key={id} href={`#${id}`} onClick={handleClick}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
            <span
              className={`hover-animation ${
                activeSection === id ? "span-active" : ""
              }`}
            />
          </a>
        ))}
      </nav>
      {isMobile && (
        <div className="mobile-nav">
          <MdOutlineMenu size={24} onClick={toggleSideNav} />
          {open && <div className="backdrop show" onClick={toggleSideNav} />}
          <div className={`side-nav ${open ? "open" : ""}`}>
            <div className="side-nav-header">
              <div className="side-nav-logo">&lt;Elijah /&gt;</div>
              <MdClose size={24} onClick={toggleSideNav} />
            </div>
            <nav>
              {navLinks.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={handleClick}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </nav>
            <div className="side-nav-socials">
              <a
                href="https://www.linkedin.com/in/elijah-eromosele-146b5923b"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://www.github.com/6godpro" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;

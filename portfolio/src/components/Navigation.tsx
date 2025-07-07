import { useEffect, useState } from "react";
import "../assets/styles/navigation.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={isScrolled ? "navigation scrolled" : "navigation"}>
      <div className="logo">&lt;dotdev /&gt;</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
            <span className="hover-animation"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

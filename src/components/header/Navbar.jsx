import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.svg";
import clsx from "clsx";
const pages = [
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#projects",
    name: "Projects",
  },
  {
    path: "#skills",
    name: "Skills",
  },
  {
    path: "#contacts",
    name: "Contacts",
  },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="Logo" className="nav__logo" />
        <nav>
          <div className="nav__burger" onClick={toggleMenu}>
            <span
              className={clsx("nav__burger-line", { active: menuOpen })}
            ></span>
          </div>
          <div className={clsx("nav__menu", { active: menuOpen })}>
            <ul className="nav__list">
              {pages.map((item) => (
                <li className="nav__item" key={item.name}>
                  <a href={item.path} className="nav__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;

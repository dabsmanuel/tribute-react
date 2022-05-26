import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav_menu">
        <li className="nav__item">
          <a href="#biography">Biography</a>
        </li>

        <li className="nav__item">
          <a href="#tribute" className="active">
            Tribute Page
          </a>
        </li>

        <li className="nav__item">
          <a href="#discography">Discography</a>
        </li>
      </ul>

      <div className="nav__toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;

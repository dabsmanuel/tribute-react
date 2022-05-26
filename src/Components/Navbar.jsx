import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <a href="#biography">Biography</a>
          </li>

          <li>
            <a href="#tribute" className="active">
              Tribute Page
            </a>
          </li>

          <li>
            <a href="#discography">Discography</a>
          </li>
        </ul>

        <div className="Hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
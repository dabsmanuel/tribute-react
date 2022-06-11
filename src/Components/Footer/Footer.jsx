import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {

  const heart = <FontAwesomeIcon icon={faHeart} />;
  return (
    <footer>
      <main className="foot">
        <p>&copy; 2022 - Tribute Page</p>
        <p>built by Dabs with  <span>{heart}</span></p>
      </main>
    </footer>
  );
}

export default Footer
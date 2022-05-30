import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './Header-text.css'

export default function HeaderText() {

  const element = <FontAwesomeIcon icon={faChevronDown} />;
  return (
    <div className="headertext">
      <div className="text">
        <h1 className='hover'>Elis Regina</h1>
        <p>
          One of the most ferociously talented singers to emerge from Brazil.
        </p>
      </div>

      <div className='icon'>
        <a href='#biography'>{element}</a>
      </div>

    </div>
  );
}

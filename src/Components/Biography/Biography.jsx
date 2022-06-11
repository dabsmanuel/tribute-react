import React from 'react';
import './Biography.css';
import bioPics from '../../Assets/biography.png';

export default function Biography() {
  return (
    <div id="biography" className='biography-section'>
      <div className="biography">
        <div className="bio">
          <h2>Biography</h2>
          <p>
            Elis Regina Carvalho Costa (17 March 1945 – 19 January 1982) was
            born in Porto Alegre, Brazil, where she began her career as singer
            at age 11 on a children's radio show, Rádio Farroupilha. She won her
            first festival song contest in 1965 singing "Arrastão" ("The
            Trawling Net") by Edu Lobo and Vinícius de Moraes.
          </p>

          <p>
            She recorded songs by such musicians as Gilberto Gil, Antônio Carlos Jobim, Milton Nascimento, João Bosco, Aldir Blanc, Chico Buarque,
            Jorge Ben and Caetano Veloso. She had an exciting voice and superb
            intonation, and excelled at up-tempo numbers. Her nickname was
            "Furacão" ("The Hurricane"), and also "Pimentinha" ("Little
            Pepper").
          </p>

          <p>
            Elis Regina succumbed to a cocaine overdose in 1982, at the age of
            36, having recorded dozens of top-selling records in her career.
            Elis is known as the greatest Brazilian singer of all time.
          </p>
        </div>
        <div className="bio-pics">
          <img src={bioPics} alt="elis" />
        </div>
      </div>
    </div>
  );
}


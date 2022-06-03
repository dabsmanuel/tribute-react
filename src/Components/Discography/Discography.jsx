import React from 'react';
import DiscoText from './DiscoText';
import Albumlist from './Albumlist';

const Discography = (props) => {
  return (
    <div id="disco" className="discograph">
        {DiscoText}
        <div className="albums">
            <div className="album-photo">
                <img src={props.disc} alt="album"></img>
                <p>{props.caption}</p>
            </div>
            <div className="album-list">
                <ol>
                    <li>{props.list}</li>
                </ol>
        </div>
      </div>
    </div>
  );
}

export default Discography
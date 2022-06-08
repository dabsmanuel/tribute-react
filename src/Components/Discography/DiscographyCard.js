import React from "react";

const DiscographyCard = (props) => {
  return (
    <div className="albumCard">
      <div className="albumPhoto">
        <img src={props.image} alt="album"></img>
        <p>{`Album - ${props.year}`}</p>
      </div>
      <div className="album-list">
          <h3>{props.title}</h3>
          <ol>
              {props.tracks.map((track, index) => (
                  <li key={index}>{track}</li>
              ))}
          </ol>
      </div>
    </div>
  );
};

export default DiscographyCard;

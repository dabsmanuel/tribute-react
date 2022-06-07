import React from "react";
import DiscoText from "./DiscoText";
import albums from "./Data/Data";

const Discography = (props) => {
  return (
    <div id="disco" className="discograph">
      {DiscoText}
      <div className="albumCard">
        <div className="albumPhoto">
          <img src={props.Disc} alt="album"></img>
          <p>{props.caption}</p>
        </div>
        <div className="album-list">{props.list}</div>
      </div>
    </div>
  );
};

export default Discography;

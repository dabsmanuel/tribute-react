import React from "react";
import albums from "./Data/Data";
import DiscographyCard from "./DiscographyCard";
import './Discography.css'

const Discography = (props) => {
  return (
    <div id="disco" className="discograph">
      <h1>Discography</h1>
      <div className="discography-grid">
        {albums.map((album) =>(
          <DiscographyCard 
            key={album.id}
            image={album.img}
            year={album.year}
            title={album.title}
            tracks={album.tracks}
          />
        ))}
      </div>
      <div className="link">
        <p>Click here to see <a href='#disco'>more albums fro Elisa.</a></p>
      </div>
    </div>
  );
};

export default Discography;

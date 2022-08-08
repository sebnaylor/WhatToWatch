import "./MediaHighlight.css";
import React from "react";

export default function MediaHighlight() {
  return (
    <div id="media-highlight" className="-mt-12 h-180 text-center">
      <h2 className="text-center pt-80">Encanto</h2>
      <div className="highlight-genres flex justify-center space-x-4 mt-4">
        <p>Animation</p>
        <p>Comedy</p>
        <p>Family</p>
      </div>
      <p className="my-1">102 mins</p>
      <div className="highlight-info flex align items-center justify-center">
        <div className="imdb flex mx-3">
          <img className="object-contain mx-1" src="./imdb.png" alt="imdb" />
          <p>7.3</p>
        </div>
        <div className="metacritic flex mx-3 my-8">
          <img
            className="object-contain mx-1"
            src="./metacritic.png"
            alt="metacritic"
          />
          <p>7.1</p>
        </div>
        <img className="object-contain mx-3 w-6" src="./info.png" alt="info" />
      </div>
    </div>
  );
}

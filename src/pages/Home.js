import "./Home.css";
import React from "react";

export default function Home() {
  return (
    <>
      <div id="media-highlight" className="-mt-12 h-180 text-center">
        <h2 className="text-center pt-80 text-2xl">Encanto</h2>
        <div className="highlight-genres flex justify-center space-x-4 mt-4">
          <p>Animation</p>
          <p>Comedy</p>
          <p>Family</p>
        </div>
        <p className="my-1">102 mins</p>
        <div className="highlight-info flex items-center justify-center">
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
          <img
            className="object-contain mx-3 w-6"
            src="./info.png"
            alt="info"
          />
        </div>
      </div>
      <div className="watchlist">
        <div className="watchlist-header">
          <div className="flex justify-between">
            <h3 className="text-2xl mx-2">Watchlist</h3>
            <div className="share flex items-center">
              <h3>Shared</h3>
              <img
                src="./filter.png"
                alt=""
                className="shared-icon mx-1 w-10"
              />
            </div>
          </div>
        </div>
        <div className="movies">
          <h2 className="text-2xl mx-2 mb-4">Movies</h2>
          <div className="movie-cards mx-2">
            <div className="blank">
              <div className="plus"></div>
            </div>
          </div>
        </div>
        <div className="series pb-5">
          <h2 className="text-2xl mx-2 my-2">Series</h2>
          <div className="series-cards mx-2">
            <div className="blank">
              <div className="plus"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

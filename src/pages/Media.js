import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListButton from "../components/ListButton";
import WatchButton from "../components/WatchButton";
import "./Media.css";

export default function Media() {
  const { id } = useParams();

  const showDetails = (target) => {
    document.getElementById(`${target.toLowerCase()}-info`).classList = "mx-2";
    document.getElementById(`${target.toLowerCase()}-btn`).classList =
      "border-b-4 border-green-500 pr-2 text-xl font-extralight text-green-500";
    const properties = ["DIRECTORS", "ACTORS", "WRITERS", "FAQS"];
    const newProperties = properties.filter((a) => a !== target);

    newProperties.forEach((a) => {
      document.getElementById(`${a.toLowerCase()}-info`).classList = "hidden";
    });

    newProperties.forEach((a) => {
      document.getElementById(`${a.toLowerCase()}-btn`).classList =
        "border-b-4 border-white-500 px-2 text-xl font-extralight";
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-2xl mx-2">Encanto</h2>
        <ListButton />
      </div>
      <div>
        <div className="flex items-center justify-between mt-3">
          <div className="media-info flex space-x-1 mx-1">
            <h4 className="text-xl">2021</h4>
            <h4 className="text-xl">PG</h4>
            <h4 className="text-xl">1hr 42m</h4>
          </div>
          <WatchButton />
        </div>
      </div>
      <div className="media-scene mt-2"></div>
      <div className="highlight-info flex items-center justify-center">
        <div className="imdb flex mx-3">
          <img className="object-contain mx-1" src="../imdb.png" alt="imdb" />
          <p>7.3</p>
        </div>
        <div className="metacritic flex mx-3 my-4">
          <img
            className="object-contain mx-1"
            src="../metacritic.png"
            alt="metacritic"
          />
          <p>7.1</p>
        </div>
      </div>
      <div className="mx-2">
        <p>
          A Colombian teenage girl has to face the frustration of being the only
          member of her family without magical powers.
        </p>
      </div>
      <div className="mx-2 my-2">
        <span
          onClick={(event) => showDetails(event.target.innerHTML)}
          id="directors-btn"
          className="border-b-4 border-green-500 pr-2 text-xl font-extralight text-green-500"
        >
          DIRECTORS
        </span>
        <span
          onClick={(event) => showDetails(event.target.innerHTML)}
          id="actors-btn"
          className="border-b-4 border-white-500 px-2 text-xl font-extralight"
        >
          ACTORS
        </span>
        <span
          onClick={(event) => showDetails(event.target.innerHTML)}
          id="writers-btn"
          className="border-b-4 border-white-500 px-2 text-xl font-extralight"
        >
          WRITERS
        </span>
        <span
          onClick={(event) => showDetails(event.target.innerHTML)}
          id="faqs-btn"
          className="border-b-4 border-white-500 pl-2 text-xl font-extralight"
        >
          FAQS
        </span>
      </div>
      <div id="directors-info" className="mx-2">
        Jared Bush, Byron Howard, Charise Castro Smith
      </div>
      <div id="actors-info" className="hidden mx-2">
        Stephanie Beatriz, María Cecilia Botero, John Leguizamo, Mauro Castillo
      </div>
      <div id="writers-info" className="writers hidden mx-2">
        Charise Castro Smith, Jared Bush, Byron Howard
      </div>
      <div id="faqs-info" className="faqs hidden mx-2">
        Q: A: Q: A:
      </div>
      <div className="movies">
        <h2 className="text-2xl mx-2 my-4">Movies like this</h2>
        <div className="mx-2">
          <div className="blank">
            <div className="plus"></div>
          </div>
        </div>
      </div>
    </>
  );
}

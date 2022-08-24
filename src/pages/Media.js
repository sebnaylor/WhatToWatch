import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ListButton from "../components/ListButton";
import WatchButton from "../components/WatchButton";
import "./Media.css";

export default function Media() {
  const { id } = useParams();
  const [detailUrl, setdetailUrl] = useState(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=5265914`
  );
  const {
    data: detail,
    detailIsPending,
    detailError,
  } = useFetch(detailUrl, { type: "GET" });
  // console.log(detail);

  const [sceneUrl, setsceneUrl] = useState(
    `https://imdb-api.com/en/API/Images/k_h9fr622q/${id}/Short`
  );
  const {
    data: scene,
    sceneIsPending,
    sceneError,
  } = useFetch(sceneUrl, { type: "GET" });

  console.log(detail);

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

  const backgroundStyle = {
    background:
      'linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25), rgb(0, 0, 0), url("/public/encanto-scene.png")',
    width: "100%",
    // height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-2xl mx-2">{detail && detail.Title}</h2>
        <ListButton />
      </div>
      <div>
        <div className="flex items-center justify-between mt-3">
          <div className="media-info flex space-x-1 mx-1">
            <h4 className="text-xl">{detail && detail.Year}</h4>
            <h4 className="text-xl">{detail && detail.Rated}</h4>
            <h4 className="text-xl">{detail && detail.Runtime}</h4>
          </div>
          <WatchButton />
        </div>
      </div>
      <div
        className="media-scene mt-2"
        style={{
          backgroundImage: "url(" + `${scene && scene.items[0].image}` + ")",
        }}
      ></div>
      <div className="highlight-info flex items-center justify-center">
        <div className="imdb flex mx-3">
          <img className="object-contain mx-1" src="../imdb.png" alt="imdb" />
          <p>{detail && detail.imdbRating}</p>
        </div>
        <div className="metacritic flex mx-3 my-4">
          <img
            className="object-contain mx-1"
            src="../metacritic.png"
            alt="metacritic"
          />
          <p>{detail && detail.Ratings[1].Value.substring(0, 2)}</p>
        </div>
      </div>
      <div className="mx-2">
        <p>{detail && detail.Plot}</p>
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
        {detail && detail.Director}
      </div>
      <div id="actors-info" className="hidden mx-2">
        {detail && detail.Actors}
      </div>
      <div id="writers-info" className="writers hidden mx-2">
        {detail && detail.Writer}
      </div>
      <div id="faqs-info" className="faqs hidden mx-2"></div>
    </>
  );
}

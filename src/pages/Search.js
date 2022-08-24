import React, { useEffect, useState } from "react";
import "./Search.css";
import { useFetch } from "../hooks/useFetch";

export default function Search() {
  const searchUrl = `http://www.omdbapi.com/?s=${"a"}&type=movie&apikey=5265914`;
  const {
    data: detail,
    detailIsPending,
    detailError,
  } = useFetch(searchUrl, { type: "GET" });

  const clickSearch = () => {
    const searchInput = document.getElementById("search").value;
    console.log(searchInput);
  };

  const clickMedia = (target) => {
    if (target === "Movie") {
      document.getElementById("movie-btn").classList =
        "rounded-l-lg bg-violet-700 border border-2 border-violet-700 w-24 text-2xl pl-2 flex justify-center items-center";
      document.getElementById("series-btn").classList =
        "rounded-r-lg w-24 border border-2 border-violet-700 text-2xl pr-2 text-right flex justify-center items-center";
      setplaceholderText("Search for a Movie...");
    } else if (target === "Series") {
      document.getElementById("movie-btn").classList =
        "rounded-l-lg w-24 border border-2 border-violet-700 text-2xl pl-2 flex justify-center items-center";
      document.getElementById("series-btn").classList =
        "rounded-r-lg bg-violet-700 border border-2 border-violet-700 w-24 pr-2 text-right text-2xl flex justify-center items-center";
      setplaceholderText("Search for a Series...");
    }
  };

  const [placeholderText, setplaceholderText] = useState(
    "Search for a Movie..."
  );

  return (
    <>
      <div className="my-4 flex justify-center">
        <div
          id="movie-btn"
          onClick={(event) => clickMedia(event.target.innerHTML)}
          className="rounded-l-lg bg-violet-700 w-24 text-2xl pl-2 flex justify-center items-center"
        >
          Movie
        </div>
        <div
          id="series-btn"
          onClick={(event) => clickMedia(event.target.innerHTML)}
          className="rounded-r-lg w-24 border border-violet-700 border-2 text-2xl pr-2 text-right flex justify-center items-center"
        >
          Series
        </div>
      </div>

      <div>
        <input
          id="search"
          className="bg-gray-300 my-2 h-10 flex justify-center content-center items-center text-gray-600 text-xl font-thin w-full"
          type="text"
          placeholder={placeholderText}
        />
      </div>
      <div onClick={clickSearch} className="flex justify-center">
        <div className="my-2 justify-center content-center flex p-2 bg-green-500 rounded-3xl items-center w-36 text-2xl font-extralight">
          Search
        </div>
      </div>
      <div className="results flex"></div>
    </>
  );
}

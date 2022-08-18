import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav flex justify-between align items-center mx-1">
      <img className="object-contain w-12" src="../logo.png" alt="logo" />
      <Link to="./">
        <h1 className="text-4xl">What To Watch</h1>
      </Link>
      <Link to="./search">
        <img
          className="object-contain w-8"
          src="../magnifying-glass.png"
          alt="search icon"
        />
      </Link>
      <Link to="./dashboard">
        <img
          className="inline object-cover w-10 h-10 rounded-full"
          src="../LeWagonProfile-min.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

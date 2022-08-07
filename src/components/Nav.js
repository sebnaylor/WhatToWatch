import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div class="nav flex justify-between align items-center mx-1">
      <img class="object-contain w-12" src="./logo.png" alt="logo" />
      <h1 class=" text-4xl">What To Watch</h1>
      <img
        class="object-contain w-8"
        src="./magnifying-glass.png"
        alt="search icon"
      />
      <img
        class="inline object-cover w-10 h-10 rounded-full"
        src="./LeWagonProfile-min.jpg"
        alt=""
      />
    </div>
  );
}

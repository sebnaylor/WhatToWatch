import React from "react";
import "./ListButton.css";

export default function ListButton() {
  return (
    <>
      <div className="flex p-2 bg-green-500 rounded-3xl items-center mr-1 w-36">
        <img src="../+.png" alt="" className="w-6 h-6" />
        <span className="ml-2 text-xl">Add to list</span>
      </div>
    </>
  );
}

import React from "react";
import "./styles/Meme.css";
import memesData from "../memeData";

export default function Meme() {
  function getMemeImg() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    console.log(url);
  }
  return (
    <div className="form">
      <div className="form-inputs">
        <input placeholder="Top Text" />
        <input placeholder="Bottom Text" />
      </div>
      <button onClick={getMemeImg}>Get a new meme image </button>
    </div>
  );
}

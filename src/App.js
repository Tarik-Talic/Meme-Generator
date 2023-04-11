import React from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme className="meme-form" />
    </div>
  );
}

export default App;

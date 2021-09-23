import React from "react";
//adding styles
import "./styles/app.scss";
//adding Components
import Song from "./components/Song";
import Player from "./components/Player";
//adding util
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;

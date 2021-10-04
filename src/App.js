import React, { useState } from "react";
//adding styles
import "./styles/app.scss";
//adding Components
import Song from "./components/Song";
import Player from "./components/Player";
//adding util
import data from "./util";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;

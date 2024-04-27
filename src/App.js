import { useState } from "react";
import { NameSpell } from "./games";
import "./App.css";

function App() {
  const [game, setGame] = useState(null);

  const renderGame = () => {
    switch (game) {
      case "NameSpell":
        return <NameSpell />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Nora's Game</h1>
      </header>
      <div className="contentWrapper">
        <div className="navBar"></div>
        <div className="gameContainer">{renderGame()}</div>
      </div>
    </div>
  );
}

export default App;

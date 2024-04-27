import { useState } from "react"
import { Alphabet, NameSpell } from "./games"
import "./App.css"

function App() {
    const [game, setGame] = useState(null)

    const renderGame = () => {
        switch (game) {
            case "Name":
                return <NameSpell />
            case "ABCs":
                return <Alphabet />
            default:
                return null
        }
    }

    return (
        <div className="app">
            <header>
                <h1>Nora's Game</h1>
            </header>
            <div className="contentWrapper">
                <div className="navBar">
                    <button
                        onClick={() => setGame("ABCs")}
                        className={game === "ABCs" ? "selected" : ""}
                    >
                        <h2>ABCs</h2>
                    </button>
                    <button
                        onClick={() => setGame("Name")}
                        className={game === "Name" ? "selected" : ""}
                    >
                        <h2>My Name</h2>
                    </button>
                    <button
                        onClick={() => setGame("Counting")}
                        className={game === "Counting" ? "selected" : ""}
                    >
                        <h2>Counting</h2>
                    </button>
                    <button
                        onClick={() => setGame("DinoMatch")}
                        className={game === "DinoMatch" ? "selected" : ""}
                    >
                        <h2>DinoMatch</h2>
                    </button>
                    <button
                        onClick={() => setGame("DinoRacer")}
                        className={game === "DinoRacer" ? "selected" : ""}
                    >
                        <h2>DinoRacer</h2>
                    </button>
                    <button
                        onClick={() => setGame("ColorMixer")}
                        className={game === "ColorMixer" ? "selected" : ""}
                    >
                        <h2>ColorMixer</h2>
                    </button>
                </div>
                <div className="gameContainer">{renderGame()}</div>
            </div>
        </div>
    )
}

export default App

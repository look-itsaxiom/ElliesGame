import { useState } from "react"
import "./nameSpell.css"

function NameSpell(props) {
    const goal = "nora skibeness"
    const [input, setInput] = useState("")
    return (
        <div className="nameWrapper">
            {input.toLowerCase() !== goal ? (
                <h2 className="nameTitle">Let's spell "Nora Skibeness"!</h2>
            ) : (
                <h2 className="nameTitle">You Win!</h2>
            )}
            <input
                className="nameInput"
                type="text"
                autoFocus={true}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default NameSpell

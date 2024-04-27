import { useEffect } from "react"

function Alphabet(props) {
    const handleKeyDown = (event) => {
        console.log(event)
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    })

    return <div></div>
}

export default Alphabet

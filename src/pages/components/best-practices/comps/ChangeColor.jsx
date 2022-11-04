
import { useState } from "react"
const ChangeColor = () => {
  const [color, setColor] = useState("black")
  return (
    <div className="change-color">
      <button 
        onClick={() => {
          setColor( color === "black" ? "red" : "black")
        }}
      >Change Color Ideal</button>
      <h1 style={{color: color}}>SAMPLE TEXT IDEAL</h1>
    </div>
  )
}

export default ChangeColor
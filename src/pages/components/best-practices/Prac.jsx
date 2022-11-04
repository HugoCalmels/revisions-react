import { useState } from "react";
import Child from "./comps/Child"


const Prac = () => {
  const [color, setColor] = useState("black")

  // The issue : 
  // Everytime we click the button to change the color, the child component will actually rerender.
  return (
    <div className="prac">
      <button
      onClick={()=>{
          setColor(color === "black" ? "red" : "black")
      }}
      >Change color
      </button>
      <h1 style={{ color: color }}>SAMPLE TEXT</h1>
      <Child/>
    </div>
  )
}

export default Prac
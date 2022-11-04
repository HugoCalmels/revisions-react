import { useState} from "react"
import Child from "./comps/Child"
import ChildIdeal from "./comps/ChildIdeal"
import ChangeColor from "./comps/ChangeColor"

const PracIdeal = () => {
  return (
  <div className="prac-ideal">
      <ChangeColor/> {/* actually we gonna change the state in another component 
      this way, it will not rerender the Child component*/}
      
      <ChildIdeal/>
  </div>
  )
}

export default PracIdeal
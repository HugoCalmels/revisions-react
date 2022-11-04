import { useState, useEffect } from "react";
import Text from "./Text"

const Lifecycle = () => {
  // 3 stages
  // mounting
  // updating 
  // unmounting
  const [showText, setShowText] = useState(false)

  // with useEffect
  useEffect(() => {
    // will call 
    console.log("component mounted")
    // useEffect like this, allow us to call an action after the component is mounted
    // like make an API call, fetch data ..
  })

  useEffect(() => {
    
  },[])

  // React.strictMode
  // this might make double render in my useEffects

  return (
    <div className="lifecycle">
      <button onClick={() => { setShowText(!showText) }}>Show text</button>
      
      {/* if showText is false it wont display <Text/> 
      but not only, also the <Text/> will not be present in the DOM until showText is true
      Also the component <Text/> represents the lifecycle "updating" as we update the component
      while typing */}
      {showText && <Text />}
    </div>
  )
}


export default Lifecycle
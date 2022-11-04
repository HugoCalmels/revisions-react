import {useState} from "react"

const Text = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <input onChange={(event) => { setText(event.target.value) }}></input>
      
      <h1>{text}</h1>
    </div>
  )
}

export default Text
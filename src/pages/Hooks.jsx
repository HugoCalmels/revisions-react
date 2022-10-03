import { useState, useReducer, useEffect, useRef, useLayoutEffect, forwardRef} from "react"
import axios from "axios"
import Button from "./components/Button.jsx"
import User from "./components/User"
import Login from "./components/Login"
const Hooks = () => {

  // useState Hook
  const [counter, setCounter] = useState(0)
  // useReducer Hook
  // create a variable for each state
  // reducer function, that takes state arguement and action argument
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": 
        return { count2: state.count2 + 1, showText: state.showText } // only changing one state
      case "toggleShowText":
        return { count2: state.count2, showText: !state.showText } // same
      default:
        return state // returns the thing untouched
    }
  }
  const [state, dispatch] = useReducer(reducer,
    { count2: 0, showText: true })
    // useEffect, just a function that will be called when the page will rerender
  const [data, setData] = useState('')
  useEffect(() => {
    console.log('###########0')
      // changing the state will rerender the page
      axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
        console.log(response);
        setData(response.data[0].email) // ==> changing the state will render the page
        // to see how many times the API were called lets check 
        console.log('API WAS CALLED')
      })
  },[]) // supposed to render x1 but still renders x2, prly cause of react router
  
  // want to see what data is made of before data fetch
  console.log('-------')
  console.log(data)
  console.log('-------')

  // useRef hook :
  const paragraphRef = useRef(null)
  // paragraphRef.style.color = "red" ==> dosnt work.
  const onClick = () => {
    console.log(paragraphRef)
    // need to access the current 1st !
    paragraphRef.current.style.color = "orange"
  }

  // useLayoutEffect
  // will trigger before the dom loads the 1st time, and before any useEffect
  const inputRef = useRef(null)
  useLayoutEffect(() => {
    console.log('#########1')
    console.log(inputRef.current.value)
  },[])

  useEffect(() => {
    console.log('#########2')
    inputRef.current.value = "HELLO WORLD"
  },[])
  
  // useImperativeHandle hook :
  const buttonRef = useRef(null)
  // ==> pas compris comment ce hook fonctionne, ca marche pas.

  // useContext hook :
  const [username, setUsername] = useState('');


  return (
    <>
      <h1>HOOKS</h1>
      <hr/>
      <h5>useState Hook :</h5>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <p>counter : {counter}</p>
      <hr/>
      <h5>useReducer Hook :</h5>
      <i>alternative to useState, when the value is changed the page is changed.</i>
      <i>will handle multiple useState</i>
      <p>{state.count2}</p>
      <p>{state.showText && "This is a text"}</p>
      <button onClick={()=>dispatch({type: "INCREMENT"})}>click here</button>
      <hr/>
      <h5>useEffect Hook :</h5>
      {/* why it's not undefined at 1st render ? */}
      {/* because data is not undefined : data, setData = useState('')*/ }
      <p>{data}</p>
      <hr />
      <h5>useRef Hook :</h5>
      <p ref={paragraphRef}>this is a random text</p>
      <button onClick={onClick}>change paragraph</button>
      <h5>useLayoutEffect Hook :</h5>
      <input ref={inputRef} value="HUGO" />
      <hr />
      <h5>useImperativeHandle Hook :</h5>
      <button>button from parent</button>
      <Button buttonRef={buttonRef} />
      <hr />
      <h5>useContext Hook :</h5>
      <Login setUsername={setUsername}/> <User username={username}/>
    </>
  )
}

export default Hooks
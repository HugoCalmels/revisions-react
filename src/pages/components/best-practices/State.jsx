import {useState} from "react"
const State = () => {
  // relations between states & objects
  // when you should create a state ( which is an object ) containing various fields,
  // or separate those fields into different states

  // example with a user and his fields 
  const [user, setUser] = useState({ name: "", age: 0, email: "" })
  
  // so the other example would be to create different states for each field, like so
  // const [name, setName] = useState('')
  // const [age, setEmail] = useState('')
  // const [email, setEmail] = useState('')

  // both is correct, but if your component already has many lines of code, then maybe it's better to use
  // the 1st example, why a big object/state.
  // else the other is more easy to read.
  return (
    <div className="state">
      <input
        onChange={(e) => {
          setUser({...user, name: e.target.value})
        }}
      />
      <input
        onChange={(e) => {
          setUser({...user, age: e.target.value})
        }}
      />
      <input
        onChange={(e) => {
          setUser({...user, email: e.target.value})
        }}
      />
    </div>
  )
}

export default State
import {useState, forwardRef, useImperativeHandle} from "react"
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alterToggle(){
      setToggle(!toggle)
    }
  }))
  return (
    <>
      <button onClick={()=>setToggle(!toggle)}>button from child-1</button>
      {toggle && <span>Toggle</span>}
      <button onClick={()=>{props.buttonRef.current.alterToggle()}}>button from child-2</button>
    </>
  )
})

export default Button
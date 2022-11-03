const Login = (props) => {
  return (
    <>
      <input type="text" onChange={(e)=>props.setUsername(e.target.value)}/>
    </>
  )
}

export default Login
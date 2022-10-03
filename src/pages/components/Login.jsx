const Login = (props) => {
  return (
    <>
      <input type="text" onChange={(e)=>props.setUsername}/>
    </>
  )
}

export default Login
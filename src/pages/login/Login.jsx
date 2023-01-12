import React from 'react'
import { Link } from 'react-router-dom'
import "./login.scss"
import { AuthContext } from '../../context/authContext'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [inputs, setInputs] = React.useState({
    username:"",
    email:"",
    
  })

  const [err, setErr] = React.useState(null)
  const navigate = useNavigate()
  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const {login} = React.useContext(AuthContext)
  const handleLogin = async (e) =>{
    e.preventDefault()

    try{
      await login(inputs);
      navigate("/")
    }catch(err){
      setErr(err.response.data)
    }
    
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
            
        </div>


        <div className='right'>
            <h1>Login</h1>
            <form >
                <input type="text" placeholder="Username" name='username' onChange={handleChange}></input>
                <input type="password" placeholder="Password" name='password' onChange={handleChange}></input>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

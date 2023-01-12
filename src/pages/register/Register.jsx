import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = React.useState({
    username:"",
    email:"",
    password:"",
    name:""
  })

  const [err, setErr] = React.useState(null)
  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    }catch(err){
      setErr(err.response.data)

    }

  }
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
            <h1>Lama Social</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
            
        </div>


        <div className='right'>
            <h1>Register</h1>
            <form >
                <input type="text" placeholder="Username" name='username' onChange={handleChange}></input>
                <input type="email" placeholder="email" name='email' onChange={handleChange}></input>

                <input type="password" placeholder="Password" name='password' onChange={handleChange}></input>
                <input type="text" placeholder="Name" name='name' onChange={handleChange}></input>
                {err & err}
                <button onClick={handleClick}>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register

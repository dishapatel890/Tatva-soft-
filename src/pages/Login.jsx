import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'



function Login() {
  return (
    <>
      <div className="login"><h1>Login Component</h1><br />
        <Link to='/product'>Go to Product-list</Link></div>

    </>
  )
}
export default Login;


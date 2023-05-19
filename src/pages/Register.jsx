import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Register.css'

function Register() {
  return (
    <>
      <Header />
      <div className="register"><h1>Register Component</h1><br />
        <Link to='/login'>Login</Link></div>

      <Footer />
    </>
  )
}
export default Register;
import React from 'react'
import { Link } from 'react-router-dom';
import { LoginStyle } from '../components/styles/Login.styled'

const Login = () => {
  return (
    <LoginStyle>
    <Link to="/home">
      <div>
        <img src="/images/no-bg-logo.png" alt="logo" />
        <p>KOLEKTSIYA</p>
      </div>
      </Link>
    </LoginStyle>
  )
} 

export default Login
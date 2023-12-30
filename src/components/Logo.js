import React from 'react'
import { Link } from 'react-router-dom';
import { LogoStyle } from './styles/Header.styled';

const Logo = () => {

  return (
        <Link to='/'>
        <LogoStyle >   
            <img src="/images/no-bg-logo.png" alt="logo" />
            <p>KOLEKTSIYA</p>
        </LogoStyle>
        </Link>
  )
}
export default Logo;
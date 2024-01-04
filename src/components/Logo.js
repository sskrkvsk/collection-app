import React from 'react'
import { Link } from 'react-router-dom';
import { LogoStyle } from './styles/Header.styled';

const Logo = ({category}) => {

  return (
        <Link to='/home'>
        <LogoStyle >   
            <img src="/images/no-bg-logo.png" alt="logo" />
            <p>KOLEKTSIYA{category && " - " }{category}</p>
        </LogoStyle>
        </Link>
  )
}
export default Logo;
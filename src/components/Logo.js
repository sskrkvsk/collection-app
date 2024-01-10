import React from 'react'
import { Link } from 'react-router-dom';
import { LogoStyle } from './styles/Header.styled';

const Logo = ({category, searchClicked}) => {
  return (
        <Link to='/home'>
        <LogoStyle >   
            <img src="/images/no-bg-logo.png" alt="logo" />
            {searchClicked ? <p>KOLEKTSIYA{category && " - " }{category}</p> : <p>{category}</p>}
        </LogoStyle>
        </Link>
  )
}
export default Logo;
import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar'
import { HomeStyle } from '../components/styles/Home.styled';

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <Main />
      <Navbar />
    </HomeStyle>
  )
}
 
export default Home; 
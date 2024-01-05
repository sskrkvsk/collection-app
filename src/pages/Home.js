import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';
import { PageStyle } from '../components/styles/Page.styled';

const Home = () => {
  return (
    <PageStyle>
      <Header />
      <Main />
    </PageStyle>
  )
}
 
export default Home; 
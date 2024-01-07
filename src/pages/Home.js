import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';
import ScrollToTopButton from '../components/ScrollBtn';
import { PageStyle } from '../components/styles/Page.styled';

const Home = () => {
  return (
    <PageStyle>
      <Header />
      <Main />
      <ScrollToTopButton></ScrollToTopButton>
    </PageStyle>
  )
}
 
export default Home; 
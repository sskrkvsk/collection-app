import React from 'react'
import Header from '../components/Header'
import { NotFoundStyle } from '../components/styles/NotFound.styled'

const NotFound = () => {
  return (
    <div>
      <Header />
      <NotFoundStyle>
        <h1>404</h1>
        <p>Page not Found</p>
      </NotFoundStyle>
    </div>
  )
} 

export default NotFound
import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { AddCollectionStyle } from '../components/styles/AddCollection.styled'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'

const AddCollection = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <AddCollectionStyle>
        <InputStyle type='text' placeholder='Collection Name'></InputStyle>
        <AddBtnStyle>Add</AddBtnStyle>
      </AddCollectionStyle>
    </div>
    
  )
}

export default AddCollection
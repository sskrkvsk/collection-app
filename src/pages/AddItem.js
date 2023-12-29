import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'
import { AddItemStyle } from '../components/styles/AddItem.styled'

const AddItem = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <AddItemStyle>
        <InputStyle type='text' placeholder='Write a Title'></InputStyle>
        <section>
          <AddBtnStyle>Add Custum Element</AddBtnStyle>
          <AddBtnStyle>Add</AddBtnStyle>
        </section>
      </AddItemStyle>
    </div>
  )
}
 
export default AddItem
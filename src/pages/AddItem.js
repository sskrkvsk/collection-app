import React from 'react'
import { Link } from 'react-router-dom';
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
          <Link to={'/addcustomitem'}>
            <AddBtnStyle>Add Custom Element</AddBtnStyle>
          </Link>
          <AddBtnStyle>Add</AddBtnStyle>
        </section>
      </AddItemStyle>
    </div>
  )
}
 
export default AddItem
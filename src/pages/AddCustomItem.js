import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { AddCustomItemStyle } from '../components/styles/AddCustomItem.styled'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'

const AddCustomItem = () => {
  return (
  <div>
    <Header />
    <NavBar />
    <AddCustomItemStyle>
      <InputStyle type='url' placeholder='Image URL'></InputStyle>
      <InputStyle type='text' placeholder='Title'></InputStyle>
      <InputStyle type='date' placeholder='Image URL'></InputStyle>
      <section>
      <label>Rating</label>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      <InputStyle type='range' min="1" max="10" step="1"></InputStyle>
      </section>
      
      <AddBtnStyle>Add</AddBtnStyle>
    </AddCustomItemStyle>
  </div>
    
  )
}

export default AddCustomItem
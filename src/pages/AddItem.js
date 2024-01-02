import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation  } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'
import { AddItemStyle } from '../components/styles/AddItem.styled'

const AddItem = () => {

  // catching and passing Table category
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');



  return (
    <div>
      <Header />
      <NavBar />
      <AddItemStyle>
        <InputStyle type='text' placeholder='Write a Title'></InputStyle>
        <section>
          <Link to={`/addcustomitem?category=${category}`}>
            <AddBtnStyle>Add Custom Element</AddBtnStyle>
          </Link>
          <AddBtnStyle>Add</AddBtnStyle>
        </section>
      </AddItemStyle>
    </div>
  )
}
 
export default AddItem
import React, { useState, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import { AddCustomItemStyle } from '../components/styles/AddCustomItem.styled'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'

const AddCustomItem = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');

  const [inputData, setInputData] = useState(
    {
      table: category,
      image: "",
      title: "",
      date: "",
      rating: 0
    }
  );

  const [canRedirect, setCanRedirect] = useState(false);

  // Change
  const handleChange = (event) => {
    const {value, name} = event.target;
    setInputData(prevValue => {
      switch (name) {
        case "image":
          return {
                ...prevValue,
                image: value
          }
        case "title":
          return {
                ...prevValue,
                title: value
          }
        case "date":
          return {
            ...prevValue,
            date: value
          }
        case "rating":
          return {
            ...prevValue,
            rating: parseInt(value, 10)
          }
      
        default:
          return prevValue;
      }
    });
  };
  
  // empty fields
  const [missed, setMissed] = useState(false);
  // Add element
  const handleAdd = () => {
    if (inputData.image !== "" && inputData.title !== "" && inputData.date !== "") {
      
      axios.post('http://localhost:3001/addCustom', { data: inputData })
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });

      setMissed(false);
      setCanRedirect(true);
    } else {
      setMissed(true);
    }
  }

  return (
  <div>
    <Header />
    <NavBar />
    <AddCustomItemStyle>
    {missed && <span>missed field</span>}
      <InputStyle 
        type='text'
        placeholder='Image URL' 
        name='image' 
        onChange={handleChange} 
        value={inputData.image}>
      </InputStyle>
      <InputStyle 
        type='text' 
        placeholder='Title' 
        name='title' 
        onChange={handleChange} 
        value={inputData.title}>
      </InputStyle>
      <InputStyle
       type='date' 
       name='date' 
       onChange={handleChange} 
       value={inputData.date}>
      </InputStyle>
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
      <InputStyle
        type='range' 
        min="1" max="10" step="1" 
        name='rating' 
        onChange={handleChange} 
        value={inputData.rating}>
      </InputStyle>
      </section>
      
      <AddBtnStyle onClick={handleAdd}>Add</AddBtnStyle>
    </AddCustomItemStyle>
    {canRedirect && <Redirect to={`/${category}`} />}
  </div>
    
  )
}

export default AddCustomItem
import React, { useState } from 'react'
import { useLocation, Redirect } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import { AddCustomItemStyle } from '../components/styles/AddCustomItem.styled'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'
import { PageStyle } from '../components/styles/Page.styled'

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
  const [missed, setMissed] = useState(false);
  
  const handleAdd = () => {
    if (inputData.image !== "" && inputData.title !== "" && inputData.date !== "") {
      axios.post('http://localhost:3001/addCustom', { data: inputData })
      .then(response => {
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
  <PageStyle>
    <Header />
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
      <div>
        <input
          type='range' 
          min="1" max="10" step="1" 
          name='rating' 
          onChange={handleChange} 
          value={inputData.rating}>
        </input>
        <p>{inputData.rating}</p>
      </div>
      </section>
      <AddBtnStyle onClick={handleAdd}>Add</AddBtnStyle>
    </AddCustomItemStyle>
    {canRedirect && <Redirect to={`/${category}`} />}
  </PageStyle>
  )
}

export default AddCustomItem
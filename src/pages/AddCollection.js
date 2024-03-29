import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header'
import { AddCollectionStyle } from '../components/styles/AddCollection.styled'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'
import { PageStyle } from '../components/styles/Page.styled';

const AddCollection = () => {
  const [inputValue, setInputValue] = useState('');
  const [canRedirect, setCanRedirect] = useState(false);
  const handleChange = (e) => setInputValue(e.target.value);
  
  const handlePostRequest = () => {
    axios.post('https://sskrkvsk.github.io/addNewCollection', { key: inputValue })
      .then(response => {
        response && setCanRedirect(true);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <PageStyle>
      <Header /> 
      <AddCollectionStyle>
      <InputStyle
          type='text'
          placeholder='Enter Collection Category'
          value={inputValue}
          onChange={handleChange}
        />
        {inputValue ? <AddBtnStyle onClick={handlePostRequest}>Add</AddBtnStyle> : <AddBtnStyle>Add</AddBtnStyle>} 
      </AddCollectionStyle>
      {canRedirect && <Redirect to="/home" />}
    </PageStyle>
  )
}

export default AddCollection
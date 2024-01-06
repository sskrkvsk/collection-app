import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SingleItemStyled } from './styles/SingleItem.styled';

const SingleItem = ({ itemData, category, curentlValues, editInputs, handleChange, handleSave, handleDelete, handleClick }) => {
 

    return (
    <SingleItemStyled>
        <header>
            {editInputs ? 
            <input type='text' placeholder='  image' name='image' value={curentlValues.image} onChange={handleChange}></input> : 
            <img src={itemData.image} alt='' />}
            <div>
                {editInputs ? 
                <input type='date' value={curentlValues.date} name='date' onChange={handleChange}></input> : 
                <p>{itemData.date}</p>}
                <span>
                    {editInputs ? 
                    <input type='number'  min="1" max="10" step="1" name='rating' value={curentlValues.rating} onChange={handleChange}></input> :  
                    <p>{itemData.rating}</p>}
                    <img src='/images/star_black_24dp.svg' alt='rating star'></img>
                </span>
            </div>  
        </header>
        <section>
            {editInputs ? 
            <> 
                <input type='text' placeholder='  title' name='title' value={curentlValues.title} onChange={handleChange}></input> 
                {itemData.author && <input type='text' placeholder='  author' name='author' value={curentlValues.author} onChange={handleChange}></input>} 
            </>: 
                <h1>{itemData.title} {itemData.author && <span><br></br>by {itemData.author}</span>}</h1>}
        
            {editInputs ? 
                <div>
                    <input type='text' placeholder='  Heading' name='heading' value={curentlValues.heading} onChange={handleChange}></input>
                    <textarea placeholder="  Notes" rows={20} name='note' value={curentlValues.paragraph} onChange={handleChange}></textarea>
                </div>
                : <article>
                    <h2>{itemData.heading}</h2>
                    <p>{itemData.note}</p>
                </article>}
            <footer>
               
                {editInputs ? 
                <button onClick={handleSave}>Save</button> :  <button onClick={handleClick}>Edit Notes</button>}
                <button onClick={() => handleDelete(itemData.id, category)}>Delete Book</button>
            </footer>
        </section>
    </SingleItemStyled>
  )
}

export default SingleItem
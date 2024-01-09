import React from 'react';
import { format } from 'date-fns';
import { SingleItemStyled } from './styles/SingleItem.styled';
import { AddBtnStyle } from './styles/AddBtn.styled';
import { InputStyle } from './styles/Input.styled';

const SingleItem = ({ itemData, category, curentlValues, editInputs, handleChange, handleSave, handleDelete, handleClick }) => {
    let formattedDate;
    try {
      formattedDate = format(new Date(itemData.date), 'dd.MM.yyyy');
    } catch (error) {
      console.error('Error formatting date:', error);
      formattedDate = 'Invalid Date';
    }

    return (
    <SingleItemStyled>
        <header>
            {editInputs ? 
            <InputStyle type='text' placeholder='  image' name='image' value={curentlValues.image} onChange={handleChange}></InputStyle> : 
            <img src={itemData.image} alt='' />}
            <div>
                {editInputs ? 
                <InputStyle type='date' value={curentlValues.date} name='date' onChange={handleChange}></InputStyle> : 
                <p>{formattedDate}</p>}
                <span>
                    {editInputs ? 
                    <InputStyle type='number'  min="1" max="10" step="1" name='rating' value={curentlValues.rating} onChange={handleChange}></InputStyle> :  
                    <p>{itemData.rating}</p>}
                    <img src='/images/star_black_24dp.svg' alt='rating star'></img>
                </span>
            </div>  
        </header>
        <section>
            {editInputs ? 
            <> 
                <InputStyle type='text' placeholder='  Title' name='title' value={curentlValues.title} onChange={handleChange}></InputStyle> 
                {itemData.author && <InputStyle type='text' placeholder='  author' name='author' value={curentlValues.author} onChange={handleChange}></InputStyle>} 
            </>: 
                <h1>{itemData.title} {itemData.author && <span><br></br>by {itemData.author}</span>}</h1>}
        
            {editInputs ? 
                <div>
                    <InputStyle type='text' placeholder='  Heading' name='heading' value={curentlValues.heading} onChange={handleChange}></InputStyle>
                    <textarea placeholder="  Notes" rows={20} name='note' value={curentlValues.paragraph} onChange={handleChange}></textarea>
                </div>
                : <article>
                    <h2>{itemData.heading}</h2>
                    <p>{itemData.note}</p>
                </article>}
            <footer>
                {editInputs ? 
                <AddBtnStyle onClick={handleSave}>Save</AddBtnStyle> :  <AddBtnStyle onClick={handleClick}>Edit Notes</AddBtnStyle>}
                <AddBtnStyle onClick={() => handleDelete(itemData.id, category)}>Delete Item</AddBtnStyle>
            </footer>
        </section>
    </SingleItemStyled>
  )
}

export default SingleItem
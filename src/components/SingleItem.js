import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SingleItemStyled } from './styles/SingleItem.styled';

const SingleItem = ({ itemData, category, itemTitle }) => {
    const history = useHistory();
    // Previous item's data
    const [curentlValues, setCurentValues] = useState();

    // Input toggle state
    const [editInputs, setEditInputs] = useState(false);
    // Display values inside inputs/ show inputs
    function handleClick() {
        setCurentValues({
            category: category,
            title: itemData.title,
            heading: itemData.heading,
            paragraph: itemData.note,
            date: itemData.date,
            rating: itemData.rating,
            image: itemData.image,
            author: itemData.author
    });
        !editInputs && setEditInputs(true);
    }

    //Change
    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'title':
                setCurentValues(prevState => ({...prevState, title : value }));
                break;
            case 'heading':
                setCurentValues(prevState => ({...prevState, heading : value }));
                break;
            case 'note':
                setCurentValues(prevState => ({...prevState, paragraph : value }));
                break;
            case 'date':
                setCurentValues(prevState => ({...prevState, date : value }));
                break;
            case 'rating':
                setCurentValues(prevState => ({...prevState, rating : value }));
                break;
            case 'image':
                setCurentValues(prevState => ({...prevState, image : value }));
                break;
            case 'author':
                setCurentValues(prevState => ({...prevState, author : value }));
                break;

            default:
                break;
        }
    }

    // Save
    function handleSave() {
            axios.post('http://localhost:3001/editNotes', { editedData: curentlValues, prevTitle: itemData.title })
            .then(response => {
              // console.log(response.data);
            })
            .catch(error => {
              console.error("Error posting data:", error);
            });
        
        setEditInputs(false);
    }

    //Delete
    function handleDelete(item, table) {

        axios.post('http://localhost:3001/deleteItem', { itemId: item, category: table })
            .then(response => {
              // console.log(response.data);
              
            })
            .catch(error => {
              console.error("Error posting data:", error);
            });
            history.push(`/${category}`);
    }
    
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SingleItemStyled } from './styles/SingleItem.styled';

const SingleItem = ({ itemData, category, itemTitle }) => {
    const history = useHistory();
    // Previous item's data
    const [curentlValues, setCurentValues] = useState();
    const initialValues = {
        title: itemData.title,
        heading: itemData.heading,
        paragraph: itemData.note
    }

    // Input toggle state
    const [editInputs, setEditInputs] = useState(false);
    // Display values inside inputs/ show inputs
    function handleClick() {
        setCurentValues({
            category: category,
            title: itemData.title,
            heading: itemData.heading,
            paragraph: itemData.note
    });
        !editInputs && setEditInputs(true);
    }

    // Change
    const handleHeaderChange = (event) => {
        setCurentValues(prevState => ({...prevState, heading: event.target.value }));
    };
    const handleParagraphChange = (event) => {
        setCurentValues(prevState => ({...prevState, paragraph: event.target.value }));
    };

    // Save
    function handleSave() {
        if (initialValues.heading === curentlValues.heading && initialValues.paragraph === curentlValues.paragraph) {
            // console.log("nothing changed");
        } else {
            axios.post('http://localhost:3001/editNotes', { heading: curentlValues.heading, paragraph: curentlValues.paragraph, title: curentlValues.title, category: curentlValues.category })
            .then(response => {
              // console.log(response.data);
            })
            .catch(error => {
              console.error("Error posting data:", error);
            });
        }
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
            <img src={itemData.image} alt='' />
            <div>
                <p>{itemData.date}</p>
                <span>
                    <p>{itemData.rating}</p>
                    <img src='/images/star_black_24dp.svg' alt='rating star'></img>
                </span>
            </div>  
        </header>
        <section>
        <h1>{itemData.title} {itemData.author && <span><br></br>by {itemData.author}</span>}</h1>
                {editInputs ? <div>
                    <input type='text' placeholder='  Heading' value={curentlValues.heading} onChange={handleHeaderChange}></input>
                    <textarea placeholder="  Notes" rows={20} value={curentlValues.paragraph} onChange={handleParagraphChange}></textarea>
                </div>
                : <article>
                    <h2>{itemData.heading}</h2>
                    <p>{itemData.note}</p>
                </article>}
            <footer>
               
                {editInputs ? <button onClick={handleSave}>Save</button> :  <button onClick={handleClick}>Edit Notes</button>}
                <button onClick={() => handleDelete(itemData.id, category)}>Delete Book</button>
            </footer>
        </section>
    </SingleItemStyled>
  )
}

export default SingleItem
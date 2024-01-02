import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Redirect, useLocation  } from 'react-router-dom';
import { SingleItemStyled } from './styles/SingleItem.styled';

const SingleItem = ({ itemData, category, itemTitle }) => {
    // Previous item's data
    const [curentlValues, setCurentValues] = useState();
    const initialValues = {
        heading: itemData.heading,
        paragraph: itemData.note
    }

    // Input toggle state
    const [editInputs, setEditInputs] = useState(false);
    // const [saveBtn, setSaveBtn] = useState(false);

    // Display values inside inputs/ show inputs
    function handleClick() {
        setCurentValues({
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
            console.log("nothing changed");
        } else {
            console.log(curentlValues);
            console.log(initialValues);
        }
        setEditInputs(false);
    }
    
    // console.log(itemData+" + "+category+" + "+ itemTitle); 
    // [object Object] + Anime + berserk
    // console.log(itemData);
    // {id: 1, tittle: 'berserk'...}

    function handleEdit() {
        // if (editableTable === newName) {
        //     setEditableTable(null);
        //   } else {
        //   axios.post('http://localhost:3001/editCategory', { editedName: newName, oldName :editableTable })
        //     .then(response => {
        //       // console.log(response.data);
        //     })
        //     .catch(error => {
        //       console.error("Error posting data:", error);
        //     });
      
        //   setEditableTable(null); // Reset editableTable after saving
        // }
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
                    <h2>{itemData.header}</h2>
                    <p>{itemData.note}</p>
                </article>}
            <footer>
               
                {editInputs ? <button onClick={handleSave}>Save</button> :  <button onClick={handleClick}>Edit Notes</button>}
                <button>Delete Book</button>
            </footer>
        </section>
    </SingleItemStyled>
  )
}

export default SingleItem
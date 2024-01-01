import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Redirect, useLocation  } from 'react-router-dom';
import { SingleItemStyled } from './styles/SingleItem.styled';

const SingleItem = ({ itemData, category, itemTitle }) => {
    // Inputs toggle
    const [editInputs, setEditInputs] = useState(false);
    function handleClick() {
        !editInputs ? setEditInputs(true) : setEditInputs(false)
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
                    <input type='text' placeholder='  Heading'></input>
                    <textarea placeholder="  Notes" rows={20}></textarea>
                </div>
                : <article>
                    <h2>{itemData.header}</h2>
                    <p>{itemData.note}</p>
                </article>}
            <footer>
                <button onClick={handleClick}>Edit Notes</button>
                <button>Delete Book</button>
            </footer>
        </section>
    </SingleItemStyled>
  )
}

export default SingleItem
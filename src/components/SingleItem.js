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
            <img src={"x.image"} alt='' />
            <div>
                <p>{"x.date"}</p>
                <span>
                    <p>{"x.rating"}</p>
                    <img src='/images/star_black_24dp.svg' alt='rating star'></img>
                </span>
            </div>  
        </header>
        <section>
        <h1>{"x.title"}<br></br> <span>by {"x.author"}</span></h1>
                {editInputs ? <div>
                    <input type='text' placeholder='  Heading'></input>
                    <textarea placeholder="  Notes" rows={20}></textarea>
                </div>
                : <article>
                    <h2>x.header</h2>
                    <p>x.note</p>
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
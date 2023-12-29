import React, { useState } from 'react'
import { books } from '../services/test'
import { SingleItemStyled } from './styles/SingleItem.styled';

const SingleItem = () => {

    const [editInputs, setEditInputs] = useState(false);

    function handleClick() {
        !editInputs ? setEditInputs(true) : setEditInputs(false)
    }

  return (
    <SingleItemStyled>
        <header>
            <img src={books[0].image} alt='' />
            <div>
                <p>{books[0].date}</p>
                <span>
                    <p>{books[0].rating}</p>
                    <img src='/images/star_black_24dp.svg' alt='rating star'></img>
                </span>
            </div>  
        </header>
        <section>
        <h1>{books[0].title}<br></br> <span>by {books[0].author}</span></h1>
                {editInputs ? <div>
                    <input type='text' placeholder='  Heading'></input>
                    <textarea placeholder="  Notes" rows={20}></textarea>
                </div>
                : <article>
                    <h2>My thoughts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Nec ultrices dui sapien eget mi proin sed.</p>
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
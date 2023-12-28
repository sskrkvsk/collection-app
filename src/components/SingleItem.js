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
        <div>
            <img src={books[0].image} alt='' />
            <h1>{books[0].title} by {books[0].author}</h1>
            <p>{books[0].data}</p>
            
            <p><img src='/images/star_black_24dp.svg' alt='rating star'></img>{books[0].rating}</p>
            
        </div>
        <section>
            <article>
                {editInputs ? <div>
                    <input type='text'></input>
                    <input type='text'></input>
                </div>
                : <div>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Nec ultrices dui sapien eget mi proin sed.</p>
                </div>}
            </article>
            <div>
                <button onClick={handleClick}>Edit</button>
                <button>Delete</button>
            </div>
        </section>
    </SingleItemStyled>
  )
}

export default SingleItem
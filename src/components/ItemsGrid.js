import React from 'react'
import { books } from '../services/test'

const ItemsGrid = () => {
  return (
    <div>
        {books.map((item) => {
            return <div>
                        <img src={item.image} alt='' />
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                    </div>
            
        })}
    </div>
  )
}

export default ItemsGrid
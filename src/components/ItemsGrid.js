import React from 'react'
import { books } from '../services/test'
import { ItemsGridStyle } from './styles/ItemsGrid.styled'
import { ItemsCardStyle } from './styles/ItemCard.styled'
 
const ItemsGrid = ({ gridColumns, articleVissbility }) => {
  
  
    return (
    <ItemsGridStyle gridColumns={gridColumns}>
        {books.map((item) => {
            
            return <ItemsCardStyle articleVissbility={articleVissbility}>
                        <img src={item.image} alt='' />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <span><img src='/images/star_black_24dp.svg' alt='rating star'></img>{item.rating}</span>
                            <article>{item.note}</article>
                        </div>
                        
                    </ItemsCardStyle>
            
        })}
    </ItemsGridStyle>
  )
}

export default ItemsGrid
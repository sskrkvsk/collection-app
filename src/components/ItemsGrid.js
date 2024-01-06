import React from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { ItemsGridStyle } from './styles/ItemsGrid.styled'
import { ItemsCardStyle } from './styles/ItemCard.styled'
 
const ItemsGrid = ({ gridColumns, articleVissbility, tableData, category }) => {
  return (
    <ItemsGridStyle gridColumns={gridColumns}>
      {tableData.map((item, index) => {
        const formattedDate = format(new Date(item.date), 'dd.MM.yyyy');
        const trimmedTitle = encodeURIComponent(item.title.trim()).toLowerCase();
        return (
          <ItemsCardStyle key={index} articleVissbility={articleVissbility}>      
            <img src={item.image} alt='' />
            <div>
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              {item.date && <p>{formattedDate}</p>} 
              <span>
                <img src='/images/star_black_24dp.svg' alt='rating star' />
                {item.rating}
              </span>
            </div>
            <Link to={`/${category}/${trimmedTitle}`} state={{ itemTitle: item.title }}><button>ass</button></Link> 
            <article>{item.note}</article>          
          </ItemsCardStyle>
          );
      })}
    </ItemsGridStyle>
  );
};

export default ItemsGrid
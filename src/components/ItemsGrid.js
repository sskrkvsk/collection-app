import React, {useState} from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { ItemsGridStyle } from './styles/ItemsGrid.styled'
import { ItemsCardStyle } from './styles/ItemCard.styled'
 
const ItemsGrid = ({ gridColumns, articleVissbility, tableData, category }) => {

  const [correctCategory, setCorrectCategory] = useState(true);

  // function categoryCheck() {
  //   tableData.filter(value => value == category)
  // }
  return (
    <ItemsGridStyle gridColumns={gridColumns}>
      {tableData.map((item, index) => {
        // Format the date string
        const formattedDate = format(new Date(item.date), 'dd.MM.yyyy');
        const trimmedTitle = encodeURIComponent(item.title.replace(/\s+/g, '-'));


        return (
               
          <ItemsCardStyle key={index} articleVissbility={articleVissbility}>      
            <img src={item.image} alt='' />
            <div>
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p>{formattedDate}</p>
              <span>
                <img src='/images/star_black_24dp.svg' alt='rating star' />
                {item.rating}
              </span>
            </div>
            <article>{item.note}</article>
            <Link to={`/${category}/${trimmedTitle}`}><button>ass</button></Link> 
            
          </ItemsCardStyle>
        );
      })}
    </ItemsGridStyle>
    
  );
};

export default ItemsGrid
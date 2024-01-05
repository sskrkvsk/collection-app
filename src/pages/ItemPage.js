import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleItem from '../components/SingleItem'
import Logo from '../components/Logo';
import { HeaderStyle }  from '../components/styles/Header.styled'

const ItemPage = () => {

  // category from Router/ Data from a table
const { category, itemTitle } = useParams();
const [itemData, setItemData] = useState([]);

 useEffect(() => {
   axios.get(`http://localhost:3001/getItemData/${category}/${ itemTitle}`)
     .then(response => {
      //  console.log(response.data.itemData); // [{…}]
       setItemData(response.data.itemData[0]);
     })
     .catch(error => {
       console.error(`Error fetching data for table ${category}:`, error);
     });
 }, [itemData]);

  return (
    <div>
      <HeaderStyle tableName={category}>
      <Logo category={category} />
      </HeaderStyle>
      <SingleItem itemData={itemData} category={category} itemTitle={itemTitle} />
    </div>
  )
}

export default ItemPage
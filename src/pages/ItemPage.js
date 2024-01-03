import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SingleItem from '../components/SingleItem'

const ItemPage = () => {

  // category from Router/ Data from a table
const { category, itemTitle } = useParams();
const [itemData, setItemData] = useState([]);
const [searchItemTitle, setSearchItemTitle] = useState();




 useEffect(() => {
   axios.get(`http://localhost:3001/getItemData/${category}/${searchItemTitle ? searchItemTitle : itemTitle}`)
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
      <Header tableName={category} />
      <Navbar />
      <SingleItem itemData={itemData} category={category} itemTitle={itemTitle} />
    </div>
  )
}

export default ItemPage
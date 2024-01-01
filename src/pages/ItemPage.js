import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SingleItem from '../components/SingleItem'

const ItemPage = () => {

  // category from Router/ Data from a table
 const { category, itemTitle } = useParams();
 const [itemData, setItemData] = useState([]);

 console.log(category + " + " + itemTitle);

 useEffect(() => {
   axios.get(`http://localhost:3001/getItemData/${category}/${itemTitle}`)
     .then(response => {
       console.log(response.data.tableData); // [{…}, {…}, ...]
       setItemData(response.data.tableData);
     })
     .catch(error => {
       console.error(`Error fetching data for table ${category}:`, error);
     });
 }, []); //category +?

  return (
    <div>
      <Header />
      <Navbar />
      <SingleItem itemData={itemData} category={category} itemTitle={itemTitle} />
    </div>
  )
}

export default ItemPage
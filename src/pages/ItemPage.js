import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import SingleItem from '../components/SingleItem'
import Logo from '../components/Logo';
import { HeaderStyle }  from '../components/styles/Header.styled'

const ItemPage = () => {
  const history = useHistory();
  const { category, itemTitle } = useParams();
  const [itemData, setItemData] = useState([]);
  const [curentlValues, setCurentValues] = useState();
  const [editInputs, setEditInputs] = useState(false);

 useEffect(() => {
   axios.get(`https://dpg-cmfq1knqd2ns73a5ega0-a.frankfurt-postgres.render.com/getItemData/${category}/${itemTitle}`)
     .then(response => {
       setItemData(response.data.itemData[0]);
     })
     .catch(error => {
       console.error(`Error fetching data for table ${category}:`, error);
     });
 }, [category, itemTitle]);

 function handleClick() {
     setCurentValues({
         category: category,
         title: itemData.title,
         heading: itemData.heading,
         paragraph: itemData.note,
         date: itemData.date,
         rating: itemData.rating,
         image: itemData.image,
         author: itemData.author
 });
     !editInputs && setEditInputs(true);
 }

 const handleChange = (event) => {
  const {name, value} = event.target;
  switch (name) {
      case 'title':
          setCurentValues(prevState => ({...prevState, title : value }));
          break;
      case 'heading':
          setCurentValues(prevState => ({...prevState, heading : value }));
          break;
      case 'note':
          setCurentValues(prevState => ({...prevState, paragraph : value }));
          break;
      case 'date':
          setCurentValues(prevState => ({...prevState, date : value }));
          break;
      case 'rating':
          setCurentValues(prevState => ({...prevState, rating : value }));
          break;
      case 'image':
          setCurentValues(prevState => ({...prevState, image : value }));
          break;
      case 'author':
          setCurentValues(prevState => ({...prevState, author : value }));
          break;
      default:
          break;
  }
}

function handleSave() {
  axios.post('https://dpg-cmfq1knqd2ns73a5ega0-a.frankfurt-postgres.render.com/editNotes', { editedData: curentlValues, prevTitle: itemData.title })
    .then(response => {
      axios.get(`https://dpg-cmfq1knqd2ns73a5ega0-a.frankfurt-postgres.render.com/getItemData/${category}/${curentlValues.title}`)
        .then(response => {
          setItemData(response.data.itemData[0]);
        })
        .catch(error => {
          console.error(`Error fetching data for table ${category}:`, error);
        });
    })
    .catch(error => {
      console.error("Error posting data:", error);
    });

  setEditInputs(false);
}

function handleDelete(item, table) {
  axios.post('https://dpg-cmfq1knqd2ns73a5ega0-a.frankfurt-postgres.render.com/deleteItem', { itemId: item, category: table })
      .then(response => {
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
      history.push(`/${category}`);
}
  return (
    <div>
      <HeaderStyle tableName={category}>
      <Logo category={category} />
      </HeaderStyle>
      <SingleItem itemData={itemData} category={category} itemTitle={itemTitle} curentlValues={curentlValues} editInputs={editInputs} handleChange={handleChange} handleSave={handleSave} handleDelete={handleDelete} handleClick={handleClick} />
    </div>
  )
}

export default ItemPage
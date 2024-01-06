import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation  } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import { AddBtnStyle } from '../components/styles/AddBtn.styled'
import { InputStyle } from '../components/styles/Input.styled'
import { AddItemStyle } from '../components/styles/AddItem.styled'

const AddItem = () => {
  const history = useHistory();
  // catching and passing Table category
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');

  // change
  const [searchItem, setSearchItem] = useState();
  const handleChange = (event) => {
    const {value} = event.target;
    setSearchItem(value);
  }

  // const [responseData, setResponseData] = useState(null);
  let response = '';
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      switch (category) {
        case 'Books':  
          response = await axios.get(`https://openlibrary.org/search.json?q=${searchItem}`);
          const bookResponse = response.data.docs[0];
          try {
            const coverId = bookResponse.cover_i;
            if (coverId) {
             const coverImageData = await axios.get(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`);
             const coverUrl = coverImageData.config.url;
             const dataForDB = {
               title: bookResponse.title,
               author: bookResponse.author_name[0],
               image: coverUrl,
             };
             setResponseData(dataForDB);
             sendToDB(dataForDB);
            }
          } catch (error) {
            console.error('Error fetching additional data:', error);
          } finally {
           setLoading(false);
          }
          break;
        case 'Anime':
          response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchItem}`);
          const animeResponse = response.data.data[0].attributes;
          try {
            console.log(animeResponse);
            const dataForDB = {
              title: animeResponse.canonicalTitle,
              image: animeResponse.posterImage.medium
            };
            setResponseData(dataForDB);
            sendToDB(dataForDB);
          } catch (error) {
            console.error('Error fetching additional data:', error);
          } finally {
           setLoading(false);
          }
        break;
        case 'Movies':
          console.log(searchItem);
          response = await axios.get(`https://www.omdbapi.com/?s=${searchItem}&apikey=4ab73859`);
          const movieResponse = response.data.Search[0];
          
          try {
            console.log(response.data)

            const dataForDB = {
              title: movieResponse.Title,
              image: movieResponse.Poster
            };
            setResponseData(dataForDB);
            sendToDB(dataForDB);
          
          } catch (error) {
            console.error('Error fetching additional data:', error);
          } finally {
           setLoading(false);
          }
        break;

        case 'Series':
          response = await axios.get(`https://www.omdbapi.com/?t=${searchItem}&apikey=4ab73859`);
          const seriesResponse = response.data;
          
          try {
            console.log(seriesResponse);

            const dataForDB = {
              title: seriesResponse.Title,
              image: seriesResponse.Poster
            };
            setResponseData(dataForDB);
            sendToDB(dataForDB);
          
          } catch (error) {
            console.error('Error fetching additional data:', error);
          } finally {
           setLoading(false);
          }
        break;
      
        default:
          break;
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sendToDB = async (dataForDB) => {
    try {
      await axios.post('http://localhost:3001/addApiItem', {dataForDB, category});
    } catch (error) {
      console.error('Error sending data to DB:', error);
    }
  };

  useEffect(() => {
    if (responseData) {
      const trimmedTitle = encodeURIComponent(responseData.title.trim()).toLowerCase();
      history.push(`/${category}/${trimmedTitle}`);
    }
  }, [responseData]);


  return (
    <div>
      <Header />
      <AddItemStyle>
        <InputStyle type='text' onChange={handleChange} value={searchItem} placeholder='Write a Title'></InputStyle>
        {loading && <p>Loading...</p>}
        <section>
          <Link to={`/addcustomitem?category=${category}`}>
            <AddBtnStyle>Add Custom Element</AddBtnStyle>
          </Link>
          <AddBtnStyle onClick={fetchData}>Add</AddBtnStyle>
        </section>
      </AddItemStyle>
    </div>
  )
}
 
export default AddItem
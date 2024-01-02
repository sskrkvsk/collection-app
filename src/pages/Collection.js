import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ItemsGrid from '../components/ItemsGrid';
import TopBar from '../components/TopBar';
import { PageStyle } from '../components/styles/Page.styled';

const Collection = () => {
  // category from Router/ Data from a table
  const { category } = useParams();
  const [tableData, setTableData] = useState([]);
  // Category validator
  const [, setValidCategories] = useState([]);
  const [isValidCategory, setIsValidCategory] = useState(true);
  // Styling
  const [sorting, setSorting] = useState(false);
  const [gridColumns, setGridColumns] = useState('repeat(3, 1fr)');
  const [articleVissbility, setarticleVissbility] = useState('none');

  // Get data from a table
  useEffect(() => {
    axios.get(`http://localhost:3001/getTableData/${category}`)
      .then(response => {
        // console.log(response.data.tableData);  [{…}, {…}, ...]
        setTableData(response.data.tableData);
      })
      .catch(error => {
        console.error(`Error fetching data for table ${category}:`, error);
        setIsValidCategory(false);
      });
  }, [category]);

  // Get all of the tables
  useEffect(() => {
    axios.get('http://localhost:3001/getTableNames')
      .then(response => {
        // console.log(validCategories); ['Anime', 'Books' ...]
        setValidCategories(response.data.tableNames);
        setIsValidCategory(response.data.tableNames.includes(category));
      })
      .catch(error => {
        console.error("Error fetching valid categories:", error);
      });
  }, [category]);

////////////////////////////////////////////////////////////////////////////////////  
    // Sort popup toggle

  // Grid change toggle


  const toggleGrid = () => {
    setGridColumns((prevColumns) =>
      prevColumns === 'repeat(3, 1fr)' ? '1fr' : 'repeat(3, 1fr)'
    );
    setarticleVissbility((prevValue) =>
    prevValue === 'block' ? 'none' : 'block'
  );
  };
  //
  // Grid change toggle

  return (

    <PageStyle>
      {isValidCategory ? (
        <>
          <Header />
          <TopBar sorting={sorting} setSorting={setSorting} toggleGrid={toggleGrid} tableName={category}/>
          {tableData.length > 0 ? (
            <ItemsGrid gridColumns={gridColumns} articleVissbility={articleVissbility} tableData={tableData} category={category} />
          ) : (
            <p>No items available for the selected category.</p>
          )}
        </>
      ) : (
        <Redirect to="/NotFound" />
      )}
    </PageStyle>
  );
};

export default Collection;
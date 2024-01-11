import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Redirect, useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import ItemsGrid from '../components/ItemsGrid';
import TopBar from '../components/TopBar';
import ScrollToTopButton from '../components/ScrollBtn';
import { PageStyle, NoItemsPage } from '../components/styles/Page.styled';
import { AddBtnStyle } from '../components/styles/AddBtn.styled'

const Collection = () => {
  const history = useHistory();
  const { category } = useParams();
  const [btnName, setBtnName] = useState();
  const [tableData, setTableData] = useState([]);
  const [, setValidCategories] = useState([]);
  const [isValidCategory, setIsValidCategory] = useState(true);
  const [sorting, setSorting] = useState(false);
  const [sort , setSort] = useState(true);
  const [gridColumns, setGridColumns] = useState('repeat(3, 1fr)');
  const [articleVissbility, setarticleVissbility] = useState('none');

  useEffect(() => {
    axios.post(`https://dpg-cmfq1knqd2ns73a5ega0-a.frankfurt-postgres.render.com/getTableData/${category}`, {status: sort, button: btnName })
      .then(response => {
        setTableData(response.data.tableData);
      })
      .catch(error => {
        console.error(`Error fetching data for table ${category}:`, error);
        setIsValidCategory(false);
      });
  }, [category, sort]);

  useEffect(() => {
    axios.get('https://dpg-cmfq1knqd2ns73a5ega0-a.frankfurt-postgres.render.com/getTableNames')
      .then(response => {
        setValidCategories(response.data.finalArray);
        setIsValidCategory(response.data.tableNames.includes(category));
      })
      .catch(error => {
        console.error("Error fetching valid categories:", error);
      });
  }, [category, isValidCategory.length]);

    const handleSort = (name) => {
      if (sort) {
        setSort(false);
      } else {
        setSort(true);
      }
      setBtnName(name);
    }

  const toggleGrid = () => {
    setGridColumns((prevColumns) =>
      prevColumns === 'repeat(3, 1fr)' ? '1fr' : 'repeat(3, 1fr)'
    );
    setarticleVissbility((prevValue) =>
    prevValue === 'block' ? 'none' : 'block'
  );
  };


  const handleSearch = (search, input) => {
    const titleArray = search.map((table) => {
          return table.title;
       });
       
    const lowerInput = input.toLowerCase();
    const findSimilar = (arr, searchTerm) => {
          return arr.filter(item => item.includes(searchTerm));
        };

    const result = findSimilar(titleArray, lowerInput);
    if (result.length > 1) {
      const match = result.find((item) => {
        return item === lowerInput;
      });
      if (match) {
        console.log(match);
        const trimmedTitle = encodeURIComponent(match.trim()).toLowerCase();
        let path = `/${category}/${trimmedTitle}`;
        history.push(path);
      } else {
        const trimmedTitle = encodeURIComponent(result[0].trim()).toLowerCase();
        let path = `/${category}/${trimmedTitle}`;
        history.push(path);
      }
    } else {
      console.log(result);
      const trimmedTitle = encodeURIComponent(result[0].trim()).toLowerCase();
      let path = `/${category}/${trimmedTitle}`;
      history.push(path);
    }
}

  return (
    <PageStyle>
      {isValidCategory ? (
        <>
          <Header tableName={category} tableData={tableData} clickFunction={handleSearch} />
          <TopBar sorting={sorting} setSorting={setSorting} toggleGrid={toggleGrid} tableName={category} sortingFunction={handleSort} tableData={tableData}/>
          {tableData.length > 0 ? (
            <ItemsGrid gridColumns={gridColumns} articleVissbility={articleVissbility} tableData={tableData} category={category} />
          ) : (
            <NoItemsPage>
              <p>Empty</p>
              <AddBtnStyle><Link to={'/additem'}>Start a new Collection</Link></AddBtnStyle>
            </NoItemsPage>
            
          )}
        </>
      ) : (
        <Redirect to="/NotFound" />
      )}
      <ScrollToTopButton></ScrollToTopButton>
    </PageStyle>
  );
};

export default Collection;
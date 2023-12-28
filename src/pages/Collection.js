import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ItemsGrid from '../components/ItemsGrid';
import TopBar from '../components/TopBar';
import { PageStyle } from '../components/styles/Page.styled';

const Collection = () => {
  // const { category } = useParams();
  
    // Sort popup toggle
  const [sorting, setSorting] = useState(false);
  // Grid change toggle
  const [gridColumns, setGridColumns] = useState('repeat(3, 1fr)');
  const [articleVissbility, setarticleVissbility] = useState('none');

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
      <Header />
      <TopBar sorting={sorting} setSorting={setSorting} toggleGrid={toggleGrid}/>
      <ItemsGrid gridColumns={gridColumns} articleVissbility={articleVissbility} />
    </PageStyle>

  )
}

export default Collection;
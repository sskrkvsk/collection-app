import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ItemsGrid from '../components/ItemsGrid';

const Collection = () => {
  const { category } = useParams();
  return (
    <div>
      <Header />
      <ItemsGrid />
    </div>
  )
}

export default Collection;
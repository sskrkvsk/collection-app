import React from 'react'
import { useParams } from 'react-router-dom';

const Collection = () => {
  const { category } = useParams();
  return (
    <div>Collection - {category}</div>
  )
}

export default Collection;
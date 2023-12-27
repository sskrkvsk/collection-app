import React from 'react'
import tableNames from '../services/test'

const Main = () => {
  return (
    <div>
        {tableNames.map(table => <p>{table}</p>)}
    </div>
  )
}

export default Main
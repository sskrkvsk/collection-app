import React from 'react'
import { tableNames } from '../services/test'
import AddBtn from './AddBtn'
import { MainStyle } from './styles/Main.styled'

const Main = () => {
  return (
    <MainStyle>
        {tableNames.map(table => <div><input type="hidden" name='tableName' value={{table}}></input><button>{table}</button></div>)}
        <AddBtn value="Add Custom" />
    </MainStyle>
  )
}

export default Main



// import React from 'react';
// import tableNames from '../services/test';
// import { MainStyle } from './styles/Main.styled';

// const Main = () => {
//   const handleButtonClick = async (tableName) => {
//     try {
//       const response = await fetch('/submitTableName', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ tableName }),
//       });

//       if (response.ok) {
//         // Handle successful response, if needed
//         console.log('Table name sent successfully:', tableName);
//       } else {
//         // Handle error response
//         console.error('Failed to send table name:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Error sending table name:', error.message);
//     }
//   };

//   return (
//     <MainStyle>
//       {tableNames.map((table) => (
//         <div key={table}>
//           <input type="hidden" name="tableName" value={table} />
//           <button onClick={() => handleButtonClick(table)}>{table}</button>
//         </div>
//       ))}
//     </MainStyle>
//   );
// };

// export default Main;

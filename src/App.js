import React from 'react';
import ThemeProvider from './components/styles/ThemeProvider';
import GlobalStyle from './components/styles/Global'

function App() {
  return (
    <ThemeProvider>
	    <>
	    <GlobalStyle />
		    <div>
		        <h1>Themed React App</h1>
		    </div>
		</>
    </ThemeProvider>
  );
}

export default App;
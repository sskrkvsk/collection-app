import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ItemPage from './pages/ItemPage';
import NotFound from './pages/404';
import ThemeProvider from './components/styles/ThemeProvider';
import GlobalStyle from './components/styles/Global'


	function App() {
		return (
			<Router>
		  	<ThemeProvider>
			<GlobalStyle />
			<Switch>
			  <Route path="/" exact component={Home} />
			  <Route path="/login" component={Login} />
			  <Route path="/registration" component={Registration} />
			  <Route path="/items/:itemId" component={ItemPage} />
			  <Route path="*" component={NotFound} />
			</Switch>
			</ThemeProvider>
			</Router>
		);
	  }

export default App;
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import AddCollection from './pages/AddCollection';
import AddCustomItem from './pages/AddCustomItem';
import AddItem from './pages/AddItem';
// import Start from './pages/Start';
import Login from './pages/Login';
// import Registration from './pages/Registration';
import ItemPage from './pages/ItemPage';
import NotFound from './pages/NotFound';
import ThemeProvider from './components/styles/ThemeProvider';
import GlobalStyle from './components/styles/Global'


	function App() {
		return (
			<Router>
		  	<ThemeProvider>
			<GlobalStyle />
			<Switch>
			  <Route path="/" exact component={Home} />
			  <Route path='/addcollection' component={AddCollection} />
			  <Route path='/addcustomitem' component={AddCustomItem} />
			  <Route path='/additem' component={AddItem} />
			  {/* <Route path='/start' component={Start} /> */}
			  <Route path="/login" component={Login} />
			  <Route path="/NotFound" component={NotFound} />
			  {/* <Route path="/registration" component={Registration} /> */}
			  <Route path="/:category/:itemTitle" component={ItemPage} />
			  
			  <Route path='/:category' component={Collection} />
			</Switch>
			</ThemeProvider>
			</Router>
		);
	  }
 
export default App;
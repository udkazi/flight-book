import React from 'react';
import './App.scss';
import SearchResult from './components/SearchResult';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tab from './components/Tab';

function App() {
  return (
    <Router>
      <div className="App"> 
        <ThemeContextProvider>  
          <Navbar />
          <Switch>
           <Route path="/search" component={SearchResult}/>
           <Route path="/" exact component={Tab}/>
          </Switch>
        </ThemeContextProvider> 
      </div>
    </Router>
  );
}

export default App;
   

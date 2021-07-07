import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     
     <Router>
      <>
        <Switch>
          <Route path="/" exact>

<Header>
  </Header>             
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;

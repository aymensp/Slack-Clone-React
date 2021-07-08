import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import styled from 'styled-components';
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
        <Header/>
        <AppBody>
          <SideBar/>
        <Switch>
            <Route path="/" exact>
              
            </Route>
          </Switch>
        </AppBody>          
        </>
      </Router>
    </div>
  );
}


export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;

`;

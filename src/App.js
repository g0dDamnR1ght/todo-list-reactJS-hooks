import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import MainPage from './components/pages/MainPage'
import DoneListPage from './components/pages/DoneListPage'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/done">
            <DoneListPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

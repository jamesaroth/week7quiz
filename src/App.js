import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Numbers from './containers/Numbers'
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/numbers' exact component={Numbers}/>  
    </Switch>
    
    </div>
  );
}

export default App;

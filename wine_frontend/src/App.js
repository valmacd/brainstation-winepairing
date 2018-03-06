import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' render={()=><Home/>}/>
      </div>
    );
  }
}

export default App;

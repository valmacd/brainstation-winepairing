import React, { Component } from 'react';
import WineList from './components/WineList'
import {Route, Switch} from 'react-router-dom';
import Home from './Home';

// const grid = {
//   display: 'grid',
//   gridTemplateRows:'auto'
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        
      </div>
    );
  }
}
// <Route path='/' render={()=><Home/>}/>
// <Switch>
// <Route path='/' render={()=><WineList />} />
// </Switch>

export default App;

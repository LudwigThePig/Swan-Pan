import React, { Component }  from 'react';
import Home from './views/home.js';
import Login from './views/login.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/signin' render={() => (
            <div className="App">
              <Login />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
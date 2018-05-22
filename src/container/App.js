import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
// import faWifi from '@fortawesome/fontawesome-free-solid/faWifi'

import Contain from './Contain';

import logo from './logo.svg';
// import './App.css';
// import './App.scss';


// fontawesome.library.add(brands, faWifi);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div style={{
          // height: '100vh',
          // overflow: 'hidden'
        }} >
          <Contain />
        </div>
        {/* <Booking /> */}
        {/* <Test /> */}
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div> */}
      </HashRouter>
    );
  }
}

export default App;

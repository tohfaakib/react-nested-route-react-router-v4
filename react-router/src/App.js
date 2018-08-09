import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {

  render() {
    return (

        <div className="App">

          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Nested Route</h1>
          </header>

          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink>
            </li>


            <li>
                  <NavLink to="/user" exact activeStyle={{color:'green'}}>Nested User</NavLink>
            </li>

          </ul>



        </div>

    );
  }
}

export default App;

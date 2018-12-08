import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Admin,Resource,ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


const dataProvider =jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (

      <Admin dataProvider={dataProvider}> 
        <Resource name="users" list={ListGuesser} /> 
      </Admin>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;

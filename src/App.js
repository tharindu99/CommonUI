import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostIcon from '@material-ui/icons/Book';
import {Admin,Resource,ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import customRoutes from './Route/customRoutes';

import Menu from './Menu/Menu';


const dataProvider =jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (

      <Admin 
        title="EC - Election Commission of Sri lanka"
        customRoutes={customRoutes} 
        menu={Menu}  
        dataProvider={dataProvider}
      > 
        
        <Resource name="Nomination" list={ListGuesser} icon={PostIcon}  />
        <Resource name="users" list={ListGuesser} icon={PostIcon}  />
        
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostIcon from '@material-ui/icons/Book';
import {Admin,Resource,ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import customLayout from './layout/customLayout'
import englishMessages from './i18n/en';

import customRoutes from './Route/customRoutes';

import Menu from './layout/Menu';


const dataProvider =jsonServerProvider('http://jsonplaceholder.typicode.com');

const i18nProvider = locale => {
  if (locale === 'ta') {
      return import('./i18n/ta').then(messages => messages.default);
  }
  if (locale === 'si') {
    return import('./i18n/si').then(messages => messages.default);
}

  // Always fallback on english
  return englishMessages;
};

class App extends Component {
  render() {
    return (

      <Admin 
        title="EC - Election Commission of Sri lanka"
        appLayout={customLayout}
        customRoutes={customRoutes} 
        menu={Menu}  
        dataProvider={dataProvider}
        locale="en"
        i18nProvider={i18nProvider}
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

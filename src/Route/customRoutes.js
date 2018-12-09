import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Settings from '../pages/Settings/Settings'


export default [
    <Route exact path="/Home" component={Home} />,
    <Route exact path="/Settings" component={Settings} />
];
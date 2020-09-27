import React from 'react';
import history from './history' 
import { Router, Route, Switch } from 'react-router-dom' 
import AttendeeList from '../pages/AttendeeList';
import Home from '../pages/Home'

export default function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/list' exact component={AttendeeList}/>
        </Switch>
      </Router>
  );
}


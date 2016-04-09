import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

const routes = (
  <Router history = { hashHistory }>
    <Route path='/' component={Main}>

      <Route path = '/home' component={Home} />

    </Route>

  </Router>

)

export default routes;

//Main has header or footer. Always be there. 
//      // <IndexRoute component={Home} /> 
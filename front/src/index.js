// el inicio de la app
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../src/redux/store'

import Main from '../src/components/Main';


ReactDOM.render(
  <BrowserRouter>
      <Route  path='/' component = { Main }/>
  </BrowserRouter>,
    document.getElementById('app')
  );



  
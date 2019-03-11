import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Page404 from '../components/Page404'
import InputContainer from '../containers/InputContainer'
import SingleMovie from '../containers/SingleMovie'

export default class Main extends Component {
  constructor(props){
    super(props)
  
  }
  
  render() {
    return (
      
      <div id='main' className='container-fluid'>
        <h1>Bienvenido!</h1>
        <h3>Portal de peliculas!!!!!!!</h3>
        {/* <InputContainer/> */}

        <Switch>
          <Route exact path='/' component={InputContainer }/>
          <Route exact path='/:singleMovie' render = {({match}) => <SingleMovie movieName= { match.params.singleMovie }/>}/>
          <Route component={ Page404 }/>
        </Switch>

      </div>
    )
  }
}
























import React, { Component } from 'react'
// import './App.css';
import './App1.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Main from './component/Main';
import Todomain from './Todo/Todomain'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" component={Main}/>
          <Route exact path="/todo" component={Todomain}/>
        </Router>
    )
  }
}


import React, { Component } from 'react'
import './App.css'
import './boot.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Main from './component/Main';

export default class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" component={Main}/>
        </Router>
    )
  }
}


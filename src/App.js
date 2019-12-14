import React, { Component } from 'react'
// import './App.css';
import './App1.css'
import './boot.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
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


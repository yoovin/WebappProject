import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default class Selableft extends Component {



    render() {
        return (
            <div className="leftside">
                <div className="list-group">
                    <Link to="/" className="list-group-item list-group-item-action list-group-item-black">SELab</Link><hr/>
                    <Link to="research" className="list-group-item list-group-item-action list-group-item-primary">Research</Link><hr/>
                    <Link to="/publication" className="list-group-item list-group-item-action list-group-item-secondary">Publication</Link><hr/>
                    <Link to="/member" className="list-group-item list-group-item-action list-group-item">Member</Link><hr/>
                    <Link to="/course" className="list-group-item list-group-item-action list-group-item">Course</Link><hr/>
                    <Link to="/login" className="list-group-item list-group-item-action list-group-item-info">Login</Link>
                </div>
            </div>
        )
    }
}

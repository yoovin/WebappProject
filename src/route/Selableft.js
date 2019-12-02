import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default class Selableft extends Component {



    render() {
        return (
            <div className="leftside">
                <div className="list-group">
                    <span onClick={()=>this.props.history.push("/")}  className="list-group-item list-group-item-action list-group-item-black">SELab</span><hr/>
                    <span onClick={()=>this.props.history.push("research")}  className="list-group-item list-group-item-action list-group-item-primary">Research</span><hr/>
                    <span onClick={()=>this.props.history.push("/publication")}  className="list-group-item list-group-item-action list-group-item-secondary">Publication</sapn><hr/>
                    <span onClick={()=>this.props.history.push("/member")}  className="list-group-item list-group-item-action list-group-item">Member</span><hr/>
                    <span onClick={()=>this.props.history.push("/course")}  className="list-group-item list-group-item-action list-group-item">Course</span><hr/>
                    <span onClick={()=>this.props.history.push("/todo")}  className="list-group-item list-group-item-action list-group-item">Todo</span><hr/>
                    <span onClick={()=>this.props.history.push("/login")}  className="list-group-item list-group-item-action list-group-item-info">Login</span>
                </div>
            </div>
        )
    }
}

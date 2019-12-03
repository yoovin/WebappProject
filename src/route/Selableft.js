import React, { Component } from 'react'

export default class Selableft extends Component {

    state ={
        login:false
    }

    render() {
        return (
            <div className="leftside">
                <div className="list-group">
                    <span onClick={()=>this.props.history.push("/")}  className="list-group-item list-group-item-action list-group-item-black">SELab</span><hr/>
                    <span onClick={()=>this.props.history.push("research")}  className="list-group-item list-group-item-action list-group-item-primary">Research</span><hr/>
                    <span onClick={()=>this.props.history.push("/publication")}  className="list-group-item list-group-item-action list-group-item-secondary">Publication</span><hr/>
                    <span onClick={()=>this.props.history.push("/member")}  className="list-group-item list-group-item-action list-group-item">Member</span><hr/>
                    <span onClick={()=>this.props.history.push("/course")}  className="list-group-item list-group-item-action list-group-item">Course</span><hr/>
                    <span onClick={()=>this.props.history.push("/todo")}  className="list-group-item list-group-item-action list-group-item">Todo</span><hr/>
                    {this.state.login === true ? 
                    <div>
                        <input type="text" placeholder="ID"></input><br/>
                        <input type="text" placeholder="PassWord"></input><br/>
                        <span>Login</span>   <span onClick={()=>this.props.history.push("/signup")}>Sign up</span>
                    </div>
                    : 
                    <span onClick={()=>this.setState({login:!this.state.login})} className="list-group-item list-group-item-action list-group-item-info">Login</span>}
                </div>
            </div>
        )
    }
}

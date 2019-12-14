import React, { Component } from 'react'
import Loginform from '../component/Loginform'

export default class Selableft extends Component {

    state = {
        refresh:true
    }

    handleRefresh = () => {
        this.setState({refresh: !this.state.refresh})
    }

    render() {
        return (
            <div className="leftside">
                <div className="list-group">
                    <span onClick={()=>this.props.history.push("/")}  className="list-group-item list-group-item-action list-group-item-black">SELab</span>
                    <span onClick={()=>this.props.history.push("research")}  className="list-group-item list-group-item-action list-group-item-primary">Research</span>
                    <span onClick={()=>this.props.history.push("/publication")}  className="list-group-item list-group-item-action list-group-item-secondary">Publication</span>
                    <span onClick={()=>this.props.history.push("/member")}  className="list-group-item list-group-item-action list-group-item">Member</span>
                    <span onClick={()=>this.props.history.push("/course")}  className="list-group-item list-group-item-action list-group-item">Course</span>
                    <span onClick={()=>{
                        if(window.sessionStorage.getItem('isLogin')){
                            this.props.history.push("/todo")
                        }else{
                            alert("Login Required!!")
                        }
                        }}  className="list-group-item list-group-item-action list-group-item">Todo</span>
                    {window.sessionStorage.getItem('name') === 'admin' ? 
                    <span onClick={() => this.props.history.push("/admin")} className="list-group-item list-group-item-action list-group-item">Admin Page</span>
                     :''}
                    <Loginform handleRefresh={this.handleRefresh} history={this.props.history}/>
                </div>
            </div>
        )
    }
}

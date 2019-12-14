import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

export default class Loginform extends Component {

    styles = {
        color:'red'
    }

    state = {
        loginForm:false,
        login:false,
        id:'',
        pw:'',
        loginStatus:''
    }

    handleChangeId = (e) =>{
        this.setState({id:e.target.value})
    }

    handleChangePw = (e) =>{
        this.setState({pw:e.target.value})
    }

    handleLoginState = () =>{
        axios({
            method:'post',
            url:'/post/login',
            data:{
                id:this.state.id,
                pw:this.state.pw
            }
        })
        .then(async res => {
            let {result} = res.data
            if(result === "success"){
                await window.sessionStorage.setItem('name', res.data.name)
                await window.sessionStorage.setItem('stNum', res.data.stNum)
                await window.sessionStorage.setItem('isLogin', true)
                await this.props.handleRefresh()
                await this.setState({login:true, loginStatus:''})
            }else if(result === "password error"){
                this.setState({
                    loginStatus:"Password incorrect",
                    id:'',
                    pw:''
                })
            }else if(result === "id error"){
                this.setState({
                    loginStatus:"ID incorrect",
                    id:'',
                    pw:''
                })
            }
        })
    }

    handleLogout = async () =>{
        await window.sessionStorage.clear()
        await this.setState({
            login: !this.state.login,
            loginForm: !this.state.loginForm,
            id:'',
            pw:''
            })
        await this.props.handleRefresh()
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleLoginState()
        }
    }

    render() {
        if(!this.state.login && this.state.loginForm){
            return(
                <div className="list-group-item list-group-item-action list-group-item">
                    <TextField 
                    required
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChangeId}
                    value={this.state.id}
                    id="standard-basic" 
                    label="ID" 
                    /><br/>
                    <TextField 
                    required
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChangePw}
                    value={this.state.pw}
                    id="standard-basic" 
                    label="Password" 
                    type="password"
                    /><br/>
                    <span style={this.styles}>{this.state.loginStatus}</span><br/>
                    <span onClick={()=>this.props.history.push("/register")}>SignUp</span> <span onClick={this.handleLoginState}>Login</span>
                </div>
            )}else if(this.state.login && this.state.loginForm){
            return(
                <div className="list-group-item list-group-item-action list-group-item">
                    <span>Name: {window.sessionStorage.getItem('name')}</span><br/>
                    <span>Stnum: {window.sessionStorage.getItem('stNum')}</span><br/>
                    <span onClick={this.handleLogout} style={this.styles}>Logout</span>
                </div>
            ) 
        }else if(!this.state.login && !this.state.loginForm){
            return <span onClick={()=>this.setState({loginForm:!this.state.loginForm})} className="list-group-item list-group-item-action list-group-item-info">Login</span>
        }
    }
}

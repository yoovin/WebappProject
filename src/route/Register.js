import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  });

class Register extends Component {

    state = {
        name:"",
        id:"",
        pw:"",
        email:"",
        stNum:""
    }

    handleChangeName = (e) =>{
        this.setState({name:e.target.value})
    }

    handleChangeId = (e) =>{
        this.setState({id:e.target.value})
    }

    handleChangePw = (e) =>{
        this.setState({pw:e.target.value})
    }

    handleChangeEmail = (e) =>{
        this.setState({email:e.target.value})
    }

    handleChangeStnum = (e) =>{
        this.setState({stNum:e.target.value})
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleOnRegister()
        }
    }

    handleOnRegister = (e) => {
        e.preventDefault()
        const {name, id, pw, email, stNum} = this.state
        if(name && id && pw && email && stNum){
            axios({
                method:'post',
                url:'/post/registerUser',
                data:{
                    name: name,
                    id: id,
                    pw: pw,
                    email: email,
                    stNum: stNum
                }
            })
            .then(async res => {
                if(res.data.result === 1){
                    await alert("Register Complete!")
                    await this.props.history.push("/") 
                }else{
                    alert("Something Error occured!")
                }
            })
        }else{
            alert("모든칸입력")
        }

    }

    render() {
        const { classes } = this.props
        return (
            <form onSubmit={this.handleOnRegister} className={classes.root} noValidate autoComplete="off">
                <div className="rightside">
                    <div className="out">
                        <div className="in">
                            <h2 style={{color:"#333333"}}>SignUp Page</h2>
                            <TextField 
                            required
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            id="standard-basic" 
                            label="Name"
                            /><br/>
                            <TextField 
                            required
                            value={this.state.id}
                            onChange={this.handleChangeId}
                            id="standard-basic" 
                            label="ID" 
                            /><br/>
                            <TextField 
                            required
                            value={this.state.pw}
                            onChange={this.handleChangePw}
                            id="standard-basic" 
                            label="Password" 
                            /><br/>
                            <TextField 
                            required
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                            id="standard-basic" 
                            label="Email" 
                            /><br/>
                            <TextField 
                            required
                            value={this.state.stNum}
                            onChange={this.handleChangeStnum}
                            id="standard-basic" 
                            label="Student Number" 
                            type="number"
                            /><br/><br/>
                            <Button type="submit" color="primary">Register</Button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default withStyles(styles)(Register)
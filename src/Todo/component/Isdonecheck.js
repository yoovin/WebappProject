import React from 'react';
import axios from 'axios'
import Checkicon from '../fontawesome/Checkicon'

class Isdonecheck extends React.Component{
    state={
        carddone:this.props.isdone
    }


    handleChecked = () =>{
        this.setState({carddone:!this.state.carddone})
        this.doneTodo()
        .then((res)=>{
            console.log(res)
            this.props.stateRefresh()
        })
    }

    doneTodo = () => {
        return axios({
            method:'post',
            url:'/post/isDoneCheck',
            data:{
                user:this.props.user,
                _id:this.props._id,
                isdone:!this.state.carddone
            }
        })
    }

    render(){
        return(
            <div className="Isdonecheck">
                <button className="Checkicon" title={this.state.carddone ? "cancel" : "done"}
                onClick={this.handleChecked}><Checkicon size="3x"/></button>
            </div>
        )
    }
}

export default Isdonecheck
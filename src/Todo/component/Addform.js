import React from 'react';
import axios from 'axios'

class Addform extends React.Component{

    state = {
        todo:''
    }

    addTodo = () => {
        if(window.sessionStorage.getItem('name') === null){
            window.location.reload()
        }else{
            return axios({
                method:'post',
                url:'/post/insertTodo',
                data:{
                    user:this.props.user,
                    content:this.state.todo
                }
            })
          }
    }

    handleValueChange = (e) => {
        this.setState({todo:e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addTodo()
        .then((res) => {
            this.props.stateRefresh()
            this.setState({todo:''})
        })
    }

    render(){
        return(
            <div className="Addform">
                <form onSubmit={this.handleFormSubmit}>
                <input className="Todoinput" 
                size={this.state.todo.length <= 10 ? 20 : this.state.todo.length*2}
                type="text" name="content" 
                value={this.state.todo} onChange={this.handleValueChange} 
                placeholder="add Todo"></input>
                <input className="Addbutton" type="submit" value="Add"></input>
                </form>
            </div>
        )
    }
}

export default Addform
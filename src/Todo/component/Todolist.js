import React from 'react';
import Todocard from './Todocard'
import Addform from './Addform'

class Todolist extends React.Component{

    render(){
        return(
            <div className="Todolist">
                {this.props.menu === true ? <Addform user={this.props.user} stateRefresh={this.props.stateRefresh}/> : ''}
                {this.props.todo ? this.props.todo.map(c =>{
                    if(this.props.menu === true && c.isDone === false){
                        return <Todocard user={this.props.user} _id={c._id} content={c.content} isdone={c.isDone} stateRefresh={this.props.stateRefresh}/>
                    }else if(this.props.menu === false && c.isDone === true){
                        return <Todocard user={this.props.user} _id={c._id} content={c.content} isdone={c.isDone} stateRefresh={this.props.stateRefresh}/>
                    }else{
                        return ''
                    }
                }):''}
            </div>
        )
    }
}

export default Todolist
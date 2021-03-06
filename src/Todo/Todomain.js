import React from 'react';
import './Todomain.scss';
import Todolist from './component/Todolist'
import Todoslide from './component/Todoslide';
// import Headforanimate from './component/Headforanimate'
import Axios from 'axios'

export default class Todomain extends React.Component{

state = {
    todo:'',
    user:window.sessionStorage.getItem('stNum'),
    menu:true
    // This is id if id is exist
    // id:'2018049807' // Test id
}

stateRefresh = () =>{
  this.callApi()
  .then(res => {
      this.setState({todo:res.data})
    })
  .catch(err => console.log(err))
}

callApi = () =>{
    return Axios.get('/api/findTodo',{
        params:{
            user:this.state.user
        }
    })
}

selectMenu = () => {
  !this.state.menu ? this.setState({menu:true}) : this.setState({menu:false})
}

componentWillMount(){
  this.setState({id:this.props.id})
  this.stateRefresh()

}

  render(){
    if(window.sessionStorage.getItem('name') === null){
      this.props.history.push('/')
    }
      return(
        <div className="rightside">
          {/* <Headforanimate/> */}
          <Todoslide menu={this.state.menu} selectMenu={this.selectMenu}/>
          <h1 className="title">{window.sessionStorage.getItem('name')}'s Todo</h1>
          <Todolist user={this.state.user} 
          todo={this.state.todo} 
          menu={this.state.menu} 
          stateRefresh={this.stateRefresh}
          />
        </div>
        )
    }
}
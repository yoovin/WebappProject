import React from 'react';
import './Todomain.scss';
import Todolist from './component/Todolist'
import Todoslide from './component/Todoslide';
import Headforanimate from './component/Headforanimate'

export default class Todomain extends React.Component{

constructor(props){
  super(props)
  this.state = {
    todo:'',
    id:'' 
    // This is id if id is exist
    // id:'2018049807' // Test id
  }
}

stateRefresh = () =>{
  this.callApi()
  .then(res => this.setState({todo:res}))
  .catch(err => console.log(err))
}

callApi = async () => {
  const response = await fetch(`/api/todo/${this.state.user}`)
  const body = await response.json()
  console.log('callApied!')
  return body
}

selectMenu = () => {
  !this.state.menu ? this.setState({menu:true}) : this.setState({menu:false})
}

componentDidMount(){
  this.setState({id:this.props.id})
  this.stateRefresh()

}

  render(){
    if(this.state.id){
      return(
        <body>
          <Headforanimate/>
          <Todoslide menu={this.state.menu} selectMenu={this.selectMenu}/>
          <h1 className="title">{this.state.name}의 해야할일</h1>
          <Todolist user={this.state.user} 
          todo={this.state.todo} 
          menu={this.state.menu} 
          stateRefresh={this.stateRefresh}
          />
        </body>
        )
    
  }
}
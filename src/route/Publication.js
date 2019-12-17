import React, { Component } from 'react'
import Axios from 'axios'

export default class Publication extends Component {

  state = {
    pub:''
  }

  componentWillMount(){
      Axios.get('/api/getPublication')
    .then(res=>this.setState({pub:res.data}))
    .catch(err=>console.error(err))
  }

    render() {
        return (
            <div className="rightside">
                <div className="publication">
      <h2 className="h2-research"> Publication</h2>
                    <hr className="hr-research" />
                    
      <div className="publications_nav">
        <nav>
          <a href="#publication_type1" className="nav_box">International Conference</a>
          <a href="#publication_type2" className="nav_box">International Journal</a>
          <a href="#publication_type3" className="nav_box">Domestic Conference</a>
          <a href="#publication_type4" className="nav_box">Domestic Journal</a>
        </nav>
      </div>

      <h3><a name = "publication_type1">International Conference</a></h3>
      <div className = "publication_list">
              {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "International Conference"){
                  return (
                    <a href={row.url}><p className = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
      </div>
      <h3><a name = "publication_type2">International Journal</a></h3>
      <div className = "publication_list">
      {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "International Journal"){
                  return (
                    <a href={row.url}><p className = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
        </div>
      <h3><a name = "publication_type3">Domestic Conference</a></h3>
      <div className = "publication_list">
      {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "Domestic Conference"){
                  return (
                    <a href={row.url}><p className = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
        </div>
      <h3><a name = "publication_type4">Domestic Journal</a></h3>
      <div className = "publication_list">
      {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "Domestic Journal"){
                  return (
                    <a href={row.url}><p className = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
          </div>
        </div>
      </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class Admin extends Component {

    state = {
        // Publication
        trans:'',
        sector:'',
        desc:'',
        url:'',

        // Course
        
    }

    handleSectorChange = (e) => {
        this.setState({sector:e.target.value})
    }

    handleDescChange = (e) => {
        this.setState({desc:e.target.value})
    }

    handleUrlChange = (e) => {
        this.setState({url:e.target.value})
    }

    handleSubmitPub = (e) => {
        const {trans, sector, desc, url} = this.state
        e.preventDefault()
        if(trans && sector && desc && url){
            axios({
                method:'post',
                url:'/post/addPublication',
                data:{
                    trans:trans,
                    sector:sector,
                    desc:desc,
                    url:url
                }
            })
            .then(res => {
                if(res.data.result === 1){
                    console.log("Add complete")
                    this.setState({
                        trans:'',
                        sector:'',
                        desc:'',
                        url:''
                    })
                }else if(res.data.result === 0){
                    console.error("Add error occured!")
                }
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="rightside">
                    
                    <h2 className="h2-research"> Admin Setting Page</h2>
                    <hr className="hr-research" />
                    
                    <h3>Add Publication</h3>
                    <div className="form-group">
                        <div className="pub-trans">
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={()=>this.setState({trans:"International Conference"})}/> International Conference
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={()=>this.setState({trans:"International Journal"})}/> International Journal
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={()=>this.setState({trans:"Domestic Conference"})}/> Domestic Conference
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" onChange={()=>this.setState({trans:"Domestic Journal"})}/> Domestic Journal
                            </label>
                        </div>
                        <div className="pub-title">
                            <label for="exampleInputEmail1"></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="title" onChange={this.handleSectorChange} value={this.state.sector}/>
                        </div>
                        <div className="pub-aa">
                            <div className="pub-desc">
                                <label for="exampleInputEmail1"></label>
                                <div className="pub-sub">
                                <input type="page" className="form-control" id="exampleInputEmail1" placeholder="page" onChange={this.handleDescChange} value={this.state.desc}/>
                                </div>
                                <div className="pub-sub">
                                <input type="url" className="form-control" id="exampleInputEmail1" placeholder="url" onChange={this.handleUrlChange} value={this.state.url}/>
                                </div>
                                <div className="pub-sub">
                                <button type="submit" className="btn btn-default" onClick={this.handleSubmitPub}>입력</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Course</h3>
                    <div className="form-group">
                        <div className="pub-aa">
                            <div className="pub-desc">
                                <label for="exampleInputEmail1"></label>
                                <div className="pub-sub">
                                <input type="page" className="form-control" id="exampleInputEmail1" placeholder="year"/>
                                </div>
                                <div className="pub-sub">
                                <input type="url" className="form-control" id="exampleInputEmail1" placeholder="course title"/>
                                </div>
                                
                                <div className="pub-sub">
                                <input type="url" className="form-control" id="exampleInputEmail1" placeholder="link"/>
                                </div>
                                <div className="pub-sub">
                                    <select>
                                        <option>Spring</option>      
                                        <option>Fall</option>
                                    </select>
                                </div>
                                <div className="pub-sub">
                                    <select>
                                        <option>Undergrauduate</option>      
                                        <option>Graduate</option>
                                    </select>
                                </div>
                                
                                
                                <div className="pub-sub">
                                <button type="submit" className="btn btn-default">입력</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Add To Do</h3>
                    <div className="form-group">
                        <div className="pub-sub">
                                    <select>
                                        <option>Web App</option>      
                                        <option>Software Eng</option>
                                    </select>
                                </div>
                        <div className="pub-title">
                            <label for="exampleInputEmail1"></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="title"/>
                        </div>
                        <div className="pub-sub">
                                <button type="submit" className="btn btn-default">입력</button>
                                </div>
                    </div>

                          
                    
                </div>
        )
    }
}

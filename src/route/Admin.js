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
        year:"",
        semester:"spring",
        title:"",
        grade:"Undergrauduate",
        link:"",
        courseNum:"",
        
        // Users todo
        users:"",
        stNum:"",
        todo:""
    }

    componentWillMount(){
        if(window.sessionStorage.getItem('name') === null){
            this.props.history.push('/')
        }else{
            axios.get('/api/getUser')
            .then(res => this.setState({users:res.data}))
        }
    }
    // Publication
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
        }else{
            console.log("please input complete")
        }
    }

    // Todo
    handleStnumChange = (e) => {
        this.setState({stNum:e.target.value})
    }

    handleTodoChange = (e) => {
        this.setState({todo:e.target.value})
    }

    handleSubmitTodo = () => {
        axios({
            method:'post',
            url:'/post/insertTodo',
            data:{
                user:this.state.stNum,
                content:this.state.todo
            }
        })
        .then(res => {
            if(res.data.result === 1){
                console.log("Add complete")
                this.setState({todo:""})
            }else if(res.data.result === 0){
                console.error("Add error occured!")
            }
        })
    }

    // Course
    handleYearChange = (e) => {
        this.setState({year:e.target.value})
    }

    handleSemesterChange = (e) => {
        this.setState({semester:e.target.value})
    }

    handleTitleChange = (e) => {
        this.setState({title:e.target.value})
    }

    handleGradeChange = (e) => {
        this.setState({grade:e.target.value})
    }

    handleLinkChange = (e) => {
        this.setState({link:e.target.value})
    }

    handleCoursenumChange = (e) => {
        this.setState({courseNum:e.target.value})
    }

    handleSubmitCourse = () => {
        const {year, semester, title, grade, link, courseNum} = this.state
        if(year && semester && title && grade && link && courseNum){
            axios({
                method:'post',
                url:'/post/addCourse',
                data:{
                    year:year,
                    semester:semester,
                    title:title,
                    grade:grade,
                    link:link,
                    courseNum:courseNum
                }
            })
            .then(res => {
                if(res.data.result === 1){
                    console.log("Add complete")
                    this.setState({
                        year:"",
                        semester:semester,
                        title:"",
                        grade:grade,
                        link:"",
                        courseNum:"",
                    })
                }else if(res.data.result === 0){
                    console.error("Add error occured!")
                }
            })
        }else{
            console.log("please input complete")
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
                                <button type="submit" className="btn btn-default" onClick={this.handleSubmitPub}>Add</button>
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
                                <input onChange={this.handleYearChange} value={this.state.year} className="form-control" id="exampleInputEmail1" placeholder="Year"/>
                                </div>
                                <div className="pub-sub">
                                <input onChange={this.handleCoursenumChange} value={this.state.courseNum} className="form-control" id="exampleInputEmail1" placeholder="Course Num"/>
                                </div>
                                <div className="pub-sub">
                                <input onChange={this.handleTitleChange} value={this.state.title} className="form-control" id="exampleInputEmail1" placeholder="Course Title"/>
                                </div>
                                <div className="pub-sub">
                                <input onChange={this.handleLinkChange} value={this.state.link} className="form-control" id="exampleInputEmail1" placeholder="Link URL"/>
                                </div>
                                <div className="pub-sub">
                                    <select onChange={this.handleSemesterChange}>
                                        <option value="spring">Spring</option>      
                                        <option value="fall">Fall</option>
                                    </select>
                                </div>
                                <div className="pub-sub">
                                    <select onChange={this.handleGradeChange}>
                                        <option value="Undergraduate">Undergraduate</option>      
                                        <option value="Postgraduate">Postgraduate</option>
                                    </select>
                                </div>
                                
                                
                                <div className="pub-sub">
                                <button onClick={this.handleSubmitCourse} className="btn btn-default">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Add To Do</h3>
                    <div className="form-group">
                        <div className="pub-sub">
                                    <select onChange={this.handleStnumChange}>
                                        <option value="" disabled selected>Select your student</option>
                                        {this.state.users ? this.state.users.map(data => {
                                            return(
                                                <option value={data.stNum}>{data.stNum} , {data.name}</option>
                                                )
                                        }):''}
                                    </select>
                                </div>
                        <div className="pub-title">
                            <label for="exampleInputEmail1"></label>
                            <input onChange={this.handleTodoChange} value={this.state.todo} type="email" className="form-control" id="exampleInputEmail1" placeholder="Todo"/>
                        </div>
                        <div className="pub-sub">
                                <button onClick={this.handleSubmitTodo} className="btn btn-default">Add</button>
                                </div>
                    </div>

                          
                    
                </div>
        )
    }
}

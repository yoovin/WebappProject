import React, { Component } from 'react'
import axios from 'axios'

export default class Course extends Component {

    state = {
        courses:""
    }

    componentWillMount(){
        axios.get('/api/getCourse')
        .then(res => this.setState({courses:res.data}))
    }

    render() {
        console.log(this.state)
        return (
            <div className="rightside">
                    <h2 className="h2-research"> Course</h2>
                    <hr className="hr-research"/>
                    <div className="tb">
                        <input type="checkbox" />
                        <span><h3>Fall 2019</h3></span><span><h3>Hide - Fall 2019</h3></span>
                        <hr className="course-hr"/>
                        <table className="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                    {this.state.courses ? this.state.courses.map(data => {
                                        if(data.year === "2019" && data.semester === "fall"){
                                            return(
                                                <div className="course-box">
                                                <div className="course-title">
                                                <h3>{data.title}</h3>
                                                    {data.grade}<br/>
                                                <br/>
                                            </div>
                                            
                                            <hr className="course-hr"/>
                                            <div className="course-button">
                                                <a href={data.link}><button type="button" class="btn btn-success">Go Board</button></a>
                                            </div>
                                        </div>
                                            )
                                        }
                                    }) :''}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="tb">
                        <input type="checkbox" />
                        <span><h3>Spring 2019</h3></span><span><h3>Hide - Spring 2019</h3></span>
                        <hr className="course-hr"/>
                        <table className="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                {this.state.courses ? this.state.courses.map(data => {
                                        if(data.year === "2019" && data.semester === "spring"){
                                            return(
                                                <div className="course-box">
                                                <div className="course-title">
                                                <h3>{data.title}</h3>
                                                    {data.grade}<br/>
                                                <br/>
                                            </div>
                                            <hr className="course-hr"/>
                                            <div className="course-button">
                                                <a href={data.link}><button type="button" class="btn btn-success">Go Board</button></a>
                                            </div>
                                        </div>
                                            )
                                        }
                                    }) :''}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="tb">
                        <input type="checkbox" />
                        <span><h3>Fall 2018</h3></span><span><h3>Hide - Fall 2018</h3></span>
                        <hr className="course-hr"/>
                        <table className="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                {this.state.courses ? this.state.courses.map(data => {
                                        if(data.year === "2018" && data.semester === "fall"){
                                            return(
                                                <div className="course-box">
                                                <div className="course-title">
                                                <h3>{data.title}</h3>
                                                    {data.grade}<br/>
                                                <br/>
                                            </div>
                                            <hr className="course-hr"/>
                                            <div className="course-button">
                                                <a href={data.link}><button type="button" class="btn btn-success">Go Board</button></a>
                                            </div>
                                        </div>
                                            )
                                        }
                                    }) :''}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="tb">
                        <input type="checkbox" />
                        <span><h3>Spring 2018</h3></span><span><h3>Hide - Spring 2018</h3></span>
                        <hr className="course-hr"/>
                        <table className="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                {this.state.courses ? this.state.courses.map(data => {
                                        if(data.year === "2018" && data.semester === "spring"){
                                            return(
                                                <div className="course-box">
                                                <div className="course-title">
                                                <h3>{data.title}</h3>
                                                    {data.grade}<br/>
                                                <br/>
                                            </div>
                                            <hr className="course-hr"/>
                                            <div className="course-button">
                                                <a href={data.link}><button type="button" class="btn btn-success">Go Board</button></a>
                                            </div>
                                        </div>
                                            )
                                        }
                                    }) :''}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="tb">
                        <input type="checkbox" />
                        <span><h3>Fall 2017</h3></span><span><h3>Hide - Fall 2017</h3></span>
                        <hr className="course-hr"/>
                        <table className="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                {this.state.courses ? this.state.courses.map(data => {
                                        if(data.year === "2017" && data.semester === "fall"){
                                            return(
                                                <div className="course-box">
                                                <div className="course-title">
                                                <h3>{data.title}</h3>
                                                    {data.grade}<br/>
                                                <br/>
                                            </div>
                                            <hr className="course-hr"/>
                                            <div className="course-button">
                                                <a href={data.link}><button type="button" class="btn btn-success">Go Board</button></a>
                                            </div>
                                        </div>
                                            )
                                        }
                                    }) :''}
                                </td>
                            </tr>
                        </table>
                    </div> 
                </div>
        )
    }
}

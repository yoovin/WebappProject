import React, { Component } from 'react'

export default class Course extends Component {
    render() {
        return (
            <div class="rightside">
                    <h2 class="h2-research"> Course</h2>
                    <hr class="hr-research"/>
                    <div class="tb">
                        <input type="checkbox" />
                        <span><h3>Fall 2019</h3></span><span><h3>Hide - Fall 2019</h3></span>
                        <hr class="course-hr"/>
                        <table class="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                    <div class="course-box">
                                        <div class="course-title">
                                            <h3>Web Application Development</h3>
                                            Undergraduate<br/>
                                            <br/>
                                        </div>
                                        
                        <hr class="course-hr"/>
                                        <div class="course-button">
                                            <a href="cse326/2019/index.html">
                                            <button type="button" class="btn btn-success">Go Board</button>    </a>
                                        </div>
                                    </div>
                                   
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="tb">
                        <input type="checkbox" />
                        <span><h3>Spring 2018</h3></span><span><h3>Hide - Spring 2018</h3></span>
                        <hr class="course-hr"/>
                        <table class="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                    <div class="course-box">
                                        <div class="course-title">
                                            <h3>Web Application</h3>
                                            Undergraduate<br/>
                                            <br/>
                                        </div>
                        
                        <hr class="course-hr"/>
                                        <div class="course-button">
                                            <button type="button" class="btn btn-success">Go Board</button>    
                                        </div>
                                    </div>
                                    <div class="course-box">
                                        <div class="course-title">
                                            <h3>Special Topics in Software Engineering</h3>
                                            Postgraducate<br/>
                                            <br/>
                                        </div>
                        
                        <hr class="course-hr"/>
                                        <div class="course-button">
                                            <button type="button" class="btn btn-success">Go Board</button>    
                                        </div>
                                    </div>
                                   
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="tb">
                        <input type="checkbox" />
                        <span><h3>Fall 2017</h3></span><span><h3>Hide - Fall 2017</h3></span>
                        <hr class="course-hr"/>
                        <table class="collapsible" id="collapsible1">
                            <tr>
                                <td>
                                    <div class="course-box">
                                        <div class="course-title">
                                            <h3>Web Application</h3>
                                            Undergraduate<br/>
                                            <br/>
                                        </div>
                        <hr class="course-hr"/>
                                        <div class="course-button">
                                            <button type="button" class="btn btn-success">Go Board</button>    
                                        </div>
                                    </div>
                                   
                                </td>
                            </tr>
                        </table>
                    </div>
                   
                    
                    
                </div>
        )
    }
}

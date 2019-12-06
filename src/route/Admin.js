import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div class="rightside">
                    
                    <h2 class="h2-research"> Admin Setting Page</h2>
                    <hr class="hr-research" />
                    
                    <h3>Add Publication</h3>
                    <div class="form-group">
                        <div class="pub-trans">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> International Conference
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> International Journal
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> Domestic Conference
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> Domestic Journal
                            </label>
                        </div>
                        <div class="pub-title">
                            <label for="exampleInputEmail1"></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="title"/>
                        </div>
                        <div class="pub-aa">
                            <div class="pub-desc">
                                <label for="exampleInputEmail1"></label>
                                <div class="pub-sub">
                                <input type="page" class="form-control" id="exampleInputEmail1" placeholder="page"/>
                                </div>
                                <div class="pub-sub">
                                <input type="url" class="form-control" id="exampleInputEmail1" placeholder="url"/>
                                </div>
                                <div class="pub-sub">
                                <button type="submit" class="btn btn-default">입력</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Course</h3>
                    <div class="form-group">
                        <div class="pub-aa">
                            <div class="pub-desc">
                                <label for="exampleInputEmail1"></label>
                                <div class="pub-sub">
                                <input type="page" class="form-control" id="exampleInputEmail1" placeholder="year"/>
                                </div>
                                <div class="pub-sub">
                                <input type="url" class="form-control" id="exampleInputEmail1" placeholder="course title"/>
                                </div>
                                
                                <div class="pub-sub">
                                <input type="url" class="form-control" id="exampleInputEmail1" placeholder="link"/>
                                </div>
                                <div class="pub-sub">
                                    <select>
                                        <option>Spring</option>      
                                        <option>Fall</option>
                                    </select>
                                </div>
                                <div class="pub-sub">
                                    <select>
                                        <option>Undergrauduate</option>      
                                        <option>Graduate</option>
                                    </select>
                                </div>
                                
                                
                                <div class="pub-sub">
                                <button type="submit" class="btn btn-default">입력</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Add To Do</h3>
                    <div class="form-group">
                        <div class="pub-sub">
                                    <select>
                                        <option>Web App</option>      
                                        <option>Software Eng</option>
                                    </select>
                                </div>
                        <div class="pub-title">
                            <label for="exampleInputEmail1"></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="title"/>
                        </div>
                        <div class="pub-sub">
                                <button type="submit" class="btn btn-default">입력</button>
                                </div>
                    </div>

                          
                    
                </div>
        )
    }
}

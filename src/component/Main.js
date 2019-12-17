import React, { Component } from 'react'

// import {BrowserRouter as Router, Route} from "react-router-dom"

import {Route} from "react-router-dom"

import Selabtop from '../route/Selabtop';
import Selabbottom from '../route/Selabbottom';
import Selableft from '../route/Selableft';
import Selabright from '../route/Selabright';
import Publication from '../route/Publication';
import Course from '../route/Course';
import Research from '../route/Research';
import Member from '../route/Member';
import Todomain from '../Todo/Todomain';
import Admin from '../route/Admin';
import Register from '../route/Register';

export default class Main extends Component {
    render() {
        return(
            <div className="all-display">
                <div className="main">
                    <div className="display-1">
                        <div className="display-1-1">
                            <Route path="/" component={Selabtop}/>
                        </div>
                    </div>
                    {/* Right side component */}
                    <Route exact path="/" component={Selabright}/>
                    <Route exact path="/publication" component={Publication}/>
                    <Route exact path="/course" component={Course}/>
                    <Route exact path="/research" component={Research}/>
                    <Route exact path="/member" component={Member}/>
                    <Route exact path="/todo" component={Todomain}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/register" component={Register}/>

                    {/* Another component */}
                    <Route path="/" component={Selableft}/>
                    <Route path="/" component={Selabbottom}/>
                </div>
            </div>
        )
    }
}

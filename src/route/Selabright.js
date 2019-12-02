import React, { Component } from 'react'
import Selabmap from '../component/Selabmap'
import Axios from 'axios'

export default class Selabright extends Component {

    state = {
        news:'',
        notice:'',
        course:''
    }

    componentWillMount(){
        Axios.get('/api/getPublication',{
            params:{
                number:4
            }
        })
        .then(res=>this.setState({news:res.data}))
        .catch(err=>console.error(err))

        Axios.get('/api/getNotice',{
            params:{
                number:4
            }
        })
        .then(res=>this.setState({notice:res.data}))
        .catch(err=>console.error(err))
    }

    render() {
        return (
            <div className="rightside">
                    <div className="display-2">
                        <h1>&nbsp;Hello World!</h1>
                        <hr/>
                        <div className="content">
                            Software Engineering Laboratory Within the CSE Dept at HYU(ERICA)<br/>
                            Led by asst. prof. Scott Lee<br/>
                            Research Area: Web and Web Security. Formal Engineering Methods. Requirement Engineering. Real-Time Software Engineering. Semi-structured Data<br/><br/>
                             <a className="btn btn-primary btn-lg" href="/research/" role="button">Learn more</a>
                        </div>
                    </div>
                    <div className="display-3 perfect">
                        <div className="maintitle">What's News</div>
                        <hr className="hr-short"/>
                        <hr className="hr-long"/>
                        <ul>
                            {this.state.news ? this.state.news.map((row)=>{
                                return (
                                    <li>{row.sector}</li>
                                ) 
                            }):'Loading'}
                        </ul>
                   </div>
                    <div className="display-3 left">
                        <div className="maintitle">Notice</div>
                        <hr className="hr-short"/>
                        <hr className="hr-long"/>
                        <ul>
                            {this.state.notice ? this.state.notice.map((row)=>{
                                    return (
                                        <li>{row.title}</li>
                                    ) 
                                }):'Loading'}
                        </ul>
                    </div>
                    <div className="display-3 right">
                        <div className="maintitle">Course</div>
                        <hr className="hr-short"/>
                        <hr className="hr-long"/>
                        <ul>
                            <li>Web Applicatoin</li>
                            <li>어쩌고저쩌고</li>
                        </ul>
                    </div>
                    <div className="display-4">
                        
                    {/* <Selabmap/> */}
                    </div>
                </div>
        )
    }
}

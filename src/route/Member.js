import React, { Component } from 'react'
import scott from "../img/member/scott.jpg"

export default class Member extends Component {

    state = {
        showPopup:false,
        selectedNum:0
    }

    toggleShowPopup = (num) => {
        this.setState({showPopup: !this.state.showPopup, selectedNum:num})
    }

    render() {
        return (
            <div className="rightside">
                    {/* <!-- content start --> */}
                    <div className="profile">
                        <div className="profile-box">
                            <div className="profile-image">
                                <img src={scott} alt="King God Hwang"/>
                            </div>
                            <div className="profile-content">
                                <ul>
                                    <li> Scott Uk-jin Lee</li>
                                    <li> TBA</li>
                                    <li> an asst. prof. in the CSE Dept. @ HYU (ERICA) leading this Laboratory!</li>
                                </ul>
                                <button onClick={()=>this.toggleShowPopup(1)} class="btn btn-primary btn">Learn More</button>
                            </div>
                        </div>
                        <div className="profile-box">
                            
                            

                        </div>
                        <div className="profile-box">
                            

                        </div>
                        <div className="profile-box">
                            
                            

                        </div>
                        <div className="profile-box">
                            
                            

                        </div>
                        <div className="profile-box">
                            
                            

                        </div>
                        <div className="profile-box">
                            
                           

                        </div>
                        <div className="profile-box">
                            
                            

                        </div>
                    </div>
                    {this.state.showPopup ? 
                        <Popup
                            text='Close Me'
                            closePopup={this.toggleShowPopup}
                            selectedNum={this.state.selectedNum}
                        />
                        : null
                        }
                    {/* <!-- content end --> */}
                </div>
        )
    }
}

class Popup extends Component {
    render() {
        var contents
        if (this.props.selectedNum === 1){
            contents = (
            <div>
                <span>Email: example@hanyang.ac.kr</span><br/>
                <span>Location: anywhere where u go</span><br/>
                <span>Education :</span>
                <ul>
                    <li>09 - 11 : Postdoc @ CEA LIST, France</li>
                    <li>05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ</li>
                    <li>04 - 04 : Visiting Researcher @ National University of Singapore</li>
                    <li>04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ</li>
                    <li>00 - 03 : BE in Software Engineering @ University of Auckland, NZ</li>
                </ul>
                <span>Career:</span>
                <ul>
                    <li>11 -      : Assistant Professor in CSE Dept. @ Hanyang University, Korea</li>
                </ul>
                <span>Research Area:</span>
                <ul>
                    <li>aaa</li>
                    <li>bbb</li>
                    <li>ccc</li>
                </ul>
                <span>Rewards:</span>
                <ul>
                    <li>aaa</li>
                    <li>bbb</li>
                    <li>ccc</li>
                </ul>
            </div>
            )
        }
      return (
        <div className='popup'>
          <div className='popup_inner'>
                {contents}
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }
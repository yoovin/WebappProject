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
                                <img src={scott}/>
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
                        <div class="profile-box">
                            
                            <p>메인 콘텐츠입니다. a 표시하려면 <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">여기</a>를 클릭하십시오.</p>
                            <div id="light" class="white_content">
                                Email: example@hanyang.ac.kr<br/>
                                Location: anywhere where u go<br/>
                                Education :
                                <ul>
                                    <li>09 - 11 : Postdoc @ CEA LIST, France</li>
                                    <li>05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ</li>
                                    <li>04 - 04 : Visiting Researcher @ National University of Singapore</li>
                                    <li>04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ</li>
                                    <li>00 - 03 : BE in Software Engineering @ University of Auckland, NZ</li>
                                </ul>
                                Career:
                                <ul>
                                    <li>11 -      : Assistant Professor in CSE Dept. @ Hanyang University, Korea</li>
                                </ul>
                                Research Area:
                                <ul>
                                    <li>aaa</li>
                                    <li>bbb</li>
                                    <li>ccc</li>
                                </ul>
                                Rewards:
                                <ul>
                                    <li>aaa</li>
                                    <li>bbb</li>
                                    <li>ccc</li>
                                </ul>
                                    
                            
                                <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">닫기</a></div>
                            <div id="fade" class="black_overlay"></div>

                        </div>
                        <div class="profile-box">
                            <span>Test</span><br/>
                            <button className="btn btn-primary btn" onClick={this.toggleShowPopup}>Learn More</button>

                        </div>
                        <div class="profile-box">
                            
                            <p>메인 콘텐츠입니다. a 표시하려면 <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">여기</a>를 클릭하십시오.</p>
                            <div id="light" class="white_content">a 콘텐츠입니다. <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">닫기</a></div>
                            <div id="fade" class="black_overlay"></div>

                        </div>
                        <div class="profile-box">
                            
                            <p>메인 콘텐츠입니다. a 표시하려면 <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">여기</a>를 클릭하십시오.</p>
                            <div id="light" class="white_content">a 콘텐츠입니다. <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">닫기</a></div>
                            <div id="fade" class="black_overlay"></div>

                        </div>
                        <div class="profile-box">
                            
                            <p>메인 콘텐츠입니다. a 표시하려면 <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">여기</a>를 클릭하십시오.</p>
                            <div id="light" class="white_content">a 콘텐츠입니다. <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">닫기</a></div>
                            <div id="fade" class="black_overlay"></div>

                        </div>
                        <div class="profile-box">
                            
                            <p>메인 콘텐츠입니다. a 표시하려면 <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">여기</a>를 클릭하십시오.</p>
                            <div id="light" class="white_content">a 콘텐츠입니다. <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">닫기</a></div>
                            <div id="fade" class="black_overlay"></div>

                        </div>
                        <div class="profile-box">
                            
                            <p>메인 콘텐츠입니다. a 표시하려면 <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">여기</a>를 클릭하십시오.</p>
                            <div id="light" class="white_content">a 콘텐츠입니다. <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'">닫기</a></div>
                            <div id="fade" class="black_overlay"></div>

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
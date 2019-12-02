import React, { Component } from 'react'

export default class Selabbottom extends Component {
    render() {
        return (
            <div className="bottom">
                    <div className="display-1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">/body</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">info</span>&gt;<br/>
                            {/* <!--title-->  */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">location</span>&gt;
                            Hanyang Univ. ERICA - Bd of College of Computing.
                            &lt;<span className="code">/location</span>&gt;<br/>
                            {/* <!--explain--> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">email</span>&gt;
                            example@hanyang.ac.kr
                            &lt;<span className="code">/email</span>&gt;<br/>
                            {/* <!--leader--> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">call</span>&gt;
                            031) 1234-5678
                            &lt;<span className="code">/call</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">/info</span>&gt;<br/>
                    </div>
                </div>
        )
    }
}

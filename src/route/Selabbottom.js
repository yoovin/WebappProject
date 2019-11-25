import React, { Component } from 'react'

export default class Selabbottom extends Component {
    render() {
        return (
            <div class="bottom">
                    <div class="display-1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">/body</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">info</span>&gt;<br/>
                            {/* <!--title-->  */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">location</span>&gt;
                            Hanyang Univ. ERICA - Bd of College of Computing.
                            &lt;<span class="code">/location</span>&gt;<br/>
                            {/* <!--explain--> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">email</span>&gt;
                            example@hanyang.ac.kr
                            &lt;<span class="code">/email</span>&gt;<br/>
                            {/* <!--leader--> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">call</span>&gt;
                            031) 1234-5678
                            &lt;<span class="code">/call</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">/head</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="code">body</span>&gt;<br/>

                    </div>
                </div>
        )
    }
}

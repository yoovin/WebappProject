import React, { Component } from 'react'

export default class Selabtop extends Component {
    render() {
        return (
            <div className="display-1">
                    <div className="display-1-1">
                        &lt;<span className="code">html</span>&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">head</span>&gt;<br/>
                                {/* <!--title--> */}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">title</span>&gt;
                                SELab
                                &lt;<span className="code">/title</span>&gt;<br/>
                                {/* <!--explain--> */}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">Explain</span>&gt;
                                Software Engineering Lab
                                &lt;<span className="code">/explain</span>&gt;<br/>
                                {/* <!--leader--> */}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">Leader</span>&gt;
                                asst. Prof. Scott Ukjin Lee
                                &lt;<span className="code">/Leader</span>&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">/head</span>&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code">body</span>&gt;<br/>
                    </div>
                </div>
        )
    }
}

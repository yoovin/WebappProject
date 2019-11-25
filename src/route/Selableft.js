import React, { Component } from 'react'

export default class Selableft extends Component {
    render() {
        return (
            <div class="leftside">
                <div class="list-group">
                    <a href="index.html" class="list-group-item list-group-item-action list-group-item-black">SELab</a>
                    <a href="research/index.html" class="list-group-item list-group-item-action list-group-item-primary">Research</a>
                    <a href="publication/index.html" class="list-group-item list-group-item-action list-group-item-secondary">Publication</a>
                    <a href="member/index.html" class="list-group-item list-group-item-action list-group-item">Member</a>
                    <a href="course/index.html" class="list-group-item list-group-item-action list-group-item">Course</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-info">Login</a>
                </div>
            </div>
        )
    }
}

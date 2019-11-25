import React, { Component } from 'react'
import Selabtop from '../route/Selabtop';
import Selabbottom from '../route/Selabbottom';
import Selableft from '../route/Selableft';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Selabtop/>
                <Selableft/>
                <Selabbottom/>
            </div>
        )
    }
}

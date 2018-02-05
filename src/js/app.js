import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/base/body.scss';
import ballon from '../assets/ballon.png';

export default class Hello extends Component {
    render() {
        return(
            <div>
               <img src={ ballon } alt="ballon" />
               <h1>Hello from React!</h1>

            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
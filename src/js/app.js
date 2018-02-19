import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import '../styles/base/body.scss';

export default class Swapi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: []
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people/`)
        .then((res) => {
            console.log(res);
            if(res.status === 200) {
                this.setState({details: this.state.details.concat(res.data.results)})
                console.log(this.state.details)
            }
        }).catch((err) => {
            return err;
        });
    }

    handleBackground (){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    // handleName(str) {
    //     const names = [];

    //     for(let name of str.split(' ')) {
    //         names.push(name[0].toUpperCase());
    //     }

    //     return names.join(' ');
    // }
    
    render() {
        return(
            <div>
                <div className="container_top">
                    <div className="title">
                        <h1>Star Wars</h1>
                        <p>May the force be with you</p>
                    </div>
                    <p className="results">Results: {this.state.details.length}</p>
                </div>

                <div className="container_details">
                    <div>
                        { this.state.details.map((detail, i) => 
                            <div key={i} className="subcontainer_details">
                                <div className="firstName" style={{backgroundColor: this.handleBackground()}}>
                                   <h1>SW</h1>
                                </div>
                                <div className="details">
                                    <p>{detail.name}</p>
                                    <ul>
                                       <li>Height: {detail.height}cm</li>
                                       <li>Mass: {detail.mass}kg</li>
                                       <li>Gender: {detail.gender}</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Swapi />, document.getElementById('app'));
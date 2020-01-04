import React, { Component } from 'react';
import { choice } from './Helpers';
import './Box.css';


export default class Box extends Component {
    state = {
        color: choice(this.props.allColors)
    }

    pickColor = () => {
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while (newColor === this.state.color);
        this.setState({
            color: newColor
        });
    }

    handleClick = () => {
        this.pickColor();
    }

    render() {
        return (
            <div className="Box" style={{background: this.state.color }} onClick={this.handleClick} >
                
            </div>
        )
    }
}

import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        this.props.changeColor(this.props.color, this.props.index);
    }

    render() {
        return (
            <div
                className="Box"
                style={{ backgroundColor: this.props.color }}
                onClick={this.handleClick}
            ></div>
        );
    }
}

export default Box;
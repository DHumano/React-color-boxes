import React, { Component } from 'react';
import Box from './Box';
import './boxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 16,
        allColors: ["purple", "magenta", "pink", "red"]
    }
    constructor(props) {
        super(props);
        this.state = {
            box: 2
        }
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map((e, i) =>
            <Box colors={this.props.allColors} key={i} />
        );

        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;
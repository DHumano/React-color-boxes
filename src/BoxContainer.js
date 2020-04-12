import React, { Component } from 'react';
import Box from './Box';
import './boxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 16,
        allColors: [
            '#BA68C8',
            '#9575CD',
            '#7986CB',
            '#9C27B0',
            '#673AB7',
            '#3F51B5',
            '#7B1FA2',
            '#512DA8',
            '#303F9F',
            '#E91E63',
            '#F06292',
            '#C2185B'
        ]
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
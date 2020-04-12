import React, { Component } from 'react';
import Box from './Box';
import './boxContainer.css';
import { choice } from './helpers';

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
            '#3F51B5',
            '#7986CB',
            '#673AB7',
            '#C2185B',
            '#7986CB',
            '#C2185B',
            '#BA68C8'
        ]
    }
    constructor(props) {
        super(props);
        this.state = { colorAndBox: [] };
        this.changeColor = this.changeColor.bind(this);
    }

    componentDidMount() {
        this.crearObjeto();
    }

    crearObjeto() {
        const obj = Array.from({ length: this.props.numBoxes }).map((e, i) => {
            return { color: choice(this.props.allColors), id: i };
        });
        this.setState({ colorAndBox: obj });
    }

    changeColor(color, idx) {
        const newState = this.state.colorAndBox.map((elm) => {
            if (elm.id === idx) {
                return { ...elm, color: choice(this.props.allColors, color) }
            }
            return elm;
        });
        this.setState({ colorAndBox: newState });
    }

    render() {
        const boxes = this.state.colorAndBox.map((e, i) =>
            <Box
                color={e.color}
                key={i}
                index={i}
                changeColor={this.changeColor}
            />
        );

        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;
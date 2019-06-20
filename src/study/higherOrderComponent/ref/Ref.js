import React, {Component} from 'react';
import RefHOC from './RefHOC';

@RefHOC
export default class Usual extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'sunday'
        };
    }

    clickHandle = () => {
        console.log('1111');
    };

    render() {
        const {name} = this.state, divStyle = {
            width: '200px',
            height: '200px',
            backgroundColor: '#ccc',
            textAlign: 'center',
            lineHeight: '200px'
        };
        return (
            <div style={divStyle}
                 onClick={this.clickHandle}>
                {name}
            </div>
        );
    }
}
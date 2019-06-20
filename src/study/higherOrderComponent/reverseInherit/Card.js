import React, {Component} from 'react';
import HOC from './HOC';
import AnchorButton from 'alcedo-ui/AnchorButton';

@HOC()
class Card extends Component {

    render() {
        const divStyle = {
            width: '200px',
            height: '300px',
            backgroundColor: '#ccc'
        };

        return (
            <div style={divStyle}>
                <p style={{color: 'brown'}}>啦啦啦</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
                <h3>哈哈哈</h3>
            </div>
        );
    }
}

export default Card;
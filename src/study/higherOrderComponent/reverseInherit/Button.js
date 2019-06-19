import React, {Component} from 'react';
import HOC from './HOC';
import AnchorButton from 'alcedo-ui/AnchorButton';

@HOC()
class Button extends Component {

    handleClick1 = () => {
        console.log('handleClick1');
    };

    handleClick2 = () => {
        console.log('handleClick2');
    };

    render() {
        const {options} = this.props;
        return (
            <div>
                <div>啊哈，谁在唱情歌，啊哈，不知道词。</div>
                <div>
                    <AnchorButton ref="power1" onClick={this.handleClick1}>权限1</AnchorButton>
                    <AnchorButton ref="power2" onClick={this.handleClick2}>权限2</AnchorButton>
                    <AnchorButton ref="power3">权限3</AnchorButton>
                </div>
            </div>
        );
    }
}

export default Button;
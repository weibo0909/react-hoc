import React, {Component} from 'react';
import TextFieldHoc from './TextFieldHoc';

@TextFieldHoc
class ControlInput extends Component {
    // 一个受控组件，通过属性代理的方式，把控制逻辑放进高阶组件中。
    render() {
        const {value, eventOnChange} = this.props;
        return (
            <input value={value} {...eventOnChange}/>
        );
    }
}

export default ControlInput;
// export default AttributeAgentHigherOrderComponent2(ControlInput);
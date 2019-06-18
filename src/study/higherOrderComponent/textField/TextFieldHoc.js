import React, {Component} from 'react';
import '../../../style/higherOrderComponent/higherOrderComponent.scss';

const TextFieldHoc = (BaseComponent) =>

    class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                value: this.props.initValue || ''
            };
        }

        onValueChange = (event) => {
            let value = event.target.value.toString();
            // 这句最直观的体现什么是受控（要什么值显示什么值）
            value = `输入:${value === '输入' ? '' : value.replace('输入:', '')}`;
            this.setState({value: value});
        };

        onInputFocus = () => {
            console.log('input is focus.');
        };

        render() {
            const {value} = this.state;
            const newProps = {
                value: value,// input 的value属性
                eventOnChange: {
                    onChange: this.onValueChange,// input的onChange监听，方法在高阶组件内，
                    onFocus: this.onInputFocus// input的onChange监听，方法在高阶组件内，
                }
            };
            const props = Object.assign({}, this.props, newProps);// 合成最新的props传给传入组件
            return (
                <BaseComponent {...props}/>
            );
        }

    };

export default TextFieldHoc;
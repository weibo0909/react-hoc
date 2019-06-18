import React, {Component, PureComponent} from 'react';
import SwitcherCard from './higherOrderComponent/switcherCard/SwitcherCard';
import TextField from './higherOrderComponent/textField/TextField';
import ReverseInherit from './higherOrderComponent/reverseInherit/BaseComponent';
import ButtonComponent1 from './higherOrderComponent/powerButton/ButtonComponent1';
import ButtonComponent2 from './higherOrderComponent/powerButton/ButtonComponent2';

import '../style/testComponent.scss';
import {connect} from 'react-redux';

class TestComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: {name: 'HOC-属性代理1', comp: <TextField/>},// 当前展示的组件
            components: [
                {name: 'HOC-属性代理1', comp: <TextField/>},
                {name: 'HOC-属性代理2', comp: <SwitcherCard/>},
                {name: 'HOC-反向继承1', comp: <ReverseInherit/>},
                {name: 'HOC-反向继承2', comp: <ButtonComponent1/>},
                {name: 'HOC-反向继承2.1', comp: <ButtonComponent2/>}
            ]
        };
    }

    changeShowComponent = (item) => {
        this.setState({currentComponent: item});
        console.log('--------', this.props.userInfo);
    };

    render() {
        const {components, currentComponent} = this.state;
        return (
            <div className='testComponent'>
                <div className='testBtnMenu'>
                    <h3 className='menuTitle'>react 高阶组件</h3>
                    {
                        components.map(item => {
                            return (
                                <div
                                    className={currentComponent.name === item.name ? 'menuItemOn' : 'menuItemOff'}
                                    key={item.name}
                                    onClick={() => this.changeShowComponent(item)}
                                >{item.name}</div>
                            );
                        })
                    }
                </div>
                <div className='testContentBox'>
                    <div className='title'>{currentComponent.name}</div>
                    <div className='contentLayout'>
                        <div className='showComponent'>
                            {currentComponent.comp}
                        </div>
                        <div className='readFile'>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function setStateMap(state) {
    console.log(state);
    return {
        userInfo: state.setUser.userInfo
    };
}

export default connect(setStateMap)(TestComponent);
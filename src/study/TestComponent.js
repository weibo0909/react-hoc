import React, {Component, PureComponent} from 'react';
import Define from './higherOrderComponent/define/Define';
import SwitcherCard from './higherOrderComponent/switcherCard/SwitcherCard';
import TextField from './higherOrderComponent/textField/TextField';
import ReverseInherit from './higherOrderComponent/reverseInherit/Form';
import Button from './higherOrderComponent/reverseInherit/Button';
import Property from './higherOrderComponent/reverseInherit/AddState';
import '../style/testComponent.scss';
import {connect} from 'react-redux';

class TestComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: {name: '定义', comp: <Define/>},// 当前展示的组件
            components: [
                {name: '定义', comp: <Define/>},
                {name: '属性代理例1', comp: <TextField/>},
                {name: '属性代理例2', comp: <SwitcherCard/>},
                {name: '反向继承例1', comp: <ReverseInherit/>},
                {name: '反向继承例2', comp: <Button/>},
                {name: '反向继承例3', comp: <Property data={['南京两千万', '上海三亿', '海南四亿']}/>}
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
                    </div>
                </div>
            </div>
        );
    }
}

function setStateMap(state) {
    return {
        userInfo: state.setUser.userInfo
    };
}

export default connect(setStateMap)(TestComponent);
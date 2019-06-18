import React, { Component } from 'react';
import HOC from './HOC';
@HOC({isUseDefault:false,refKey:'shanghai'})
class ButtonComponent2 extends Component{

    render(){
        return (
            <div>
                <div>
                    <div>姓名：HappyBug</div>
                    <div>电话：110</div>
                </div>
                <div>
                    <div>拥有房产：</div>
                    <ul>
                        <li>北京一套</li>
                        <li>南京两套</li>
                        <li ref='shanghai'>上海三套</li>
                        <li>海南四套</li>
                    </ul>
                    <div>拥有存款：</div>
                    <ul>
                        <li>北京一千万</li>
                        <li>南京两千万</li>
                        <li ref='shanghai'>上海三亿</li>
                        <li>海南四亿</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ButtonComponent2;
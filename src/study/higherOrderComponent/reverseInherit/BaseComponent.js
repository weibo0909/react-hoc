import React, { Component } from 'react';
import ReverseInherit from './ReverseInherit';

@ReverseInherit('dddddd')
class ReverseInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    toSubmit = () => {}

    valueChange = (eve) => {}

    render(){
        const { value } = this.state;
        return (
            <div>
                <input onChange={this.valueChange} value={value}/>
                <button onClick={this.toSubmit}>提交</button>
            </div>
        )
    }
}

export default ReverseInput
// export default ReverseInherit('gggggggg')(ReverseInput)
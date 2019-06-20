import React, {Component} from 'react';
import AddStateHOC from './AddStateHOC';

@AddStateHOC('110')

class AddState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'sunday'
        };
    }

    render() {
        const {data} = this.props, {name, tel} = this.state;
        return (
            <div>
                <div>
                    <div>姓名：{name}</div>
                    <div>电话：{tel}</div>
                </div>
                <div>
                    <div>拥有存款：</div>
                    <ul>
                        {
                            data.map(item => <li>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default AddState;
import React, {Component, Fragment} from 'react';
import SwitcherCardHoc from './SwitcherCardHoc';
import Switcher from 'alcedo-ui/Switcher';
import '../../../style/higherOrderComponent/higherOrderComponent.scss';

@SwitcherCardHoc
class SwitcherCard extends Component {

    render() {
        const {name, status, num, eventClick} = this.props;
        return (
            <Fragment>
                <div className='cardBox'>
                    <div className='cardContent'>
                        <p>{name}</p>
                        <h4>{num}</h4>
                    </div>
                </div>
                <Switcher {...eventClick}
                          label={status}/>
            </Fragment>
        );
    }
}

export default SwitcherCard;
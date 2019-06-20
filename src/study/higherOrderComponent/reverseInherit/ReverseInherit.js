import React from 'react';

const ReverseInherit2 = (BaseComponent) =>
    class AAA extends BaseComponent {

        static displayName = 'aaaa';

        valueChange = (eve) => {
            console.log(eve.target.value);
            this.setState({value: eve.target.value});
        };

        // toSubmit = () => {
        //     alert(`您要提交的值是：${this.state.value}`);
        // };

        componentDidMount() {
            // super.componentDidMount();
            console.log('22');
        }

        render() {
            const {value} = this.state;
            const superEle = super.render();
            let newElement = React.cloneElement(superEle, this.props);
            if (value) {
                return superEle;
            } else {
                newElement.props.children.splice(1, 1);
                return (newElement);
            }
            console.log(superEle);
        }
    };

// export default ReverseInherit1
export default ReverseInherit2;
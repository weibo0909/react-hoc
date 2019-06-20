import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
}

const AddStateHOC = (tel) => (wrappedComponent) => {
    return class extends wrappedComponent {
        static displayName = `HOC(${getDisplayName(wrappedComponent)})`;

        render() {
            const data = cloneDeep(this.props.data);
            console.log(super.render());
            this.state.tel = tel;
            data.push('北京两亿');
            this.props.data = data;
            return (
                <div>
                    <p>Props</p>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>
                    <p>State</p>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    {super.render()}
                </div>
            );
        }

    };
};



export default AddStateHOC;

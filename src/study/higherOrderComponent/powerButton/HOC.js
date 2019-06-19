import React from 'react';

function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
}

const HOC = (param = {isUseDefault: true}) => (wrappedComponent) => {
    return class extends wrappedComponent {
        static displayName = `HOC(${getDisplayName(wrappedComponent)})`;
        checkPower = (newElement) => {
            this.deleteElement(newElement);
            return newElement;
        };

        deleteElement = (newElement) => {
            console.log(newElement);
            if (this.deleteWitch(newElement.ref)) {
                if (newElement.props.style) {
                    newElement.props.style.display = 'none';
                } else {
                    newElement.props.style = {display: 'none'};
                }
            } else {
                if (newElement.props.children && Array.isArray(newElement.props.children)) {
                    newElement.props.children.forEach((item) => {
                        this.deleteElement(item);
                    });
                }
            }
        };

        deleteWitch = (tag) => {
            let isDelete = false;
            let defaultValue = ['power1', 'power2'];// 用数组可以更大限度的设置默认被劫持的元素个数

            if (param.isUseDefault) {
                defaultValue.push(param.refKey);
                defaultValue.forEach(item => {
                    if (item === tag) {
                        isDelete = true;
                    }
                });
            } else {
                if (param.refKey === tag) {
                    isDelete = true;
                }
            }
            console.log(defaultValue);
            return isDelete;
        };

        render() {
            const oldElement = super.render();
            let newElement = React.cloneElement(oldElement, this.props, oldElement.props.children);
            newElement = this.checkPower(newElement);
            return (newElement);
        }
    };
};



export default HOC;

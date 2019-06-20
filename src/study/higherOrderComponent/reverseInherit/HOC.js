import React from 'react';

function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
}

const HOC = () => (wrappedComponent) => {
    return class extends wrappedComponent {
        static displayName = `HOC(${getDisplayName(wrappedComponent)})`;

        render() {
            const elementTree = super.render();
            elementTree.props.children = elementTree.props.children.filter(item => {
                return item.type !== 'ul' && item;
            });
            const newTree = React.cloneElement(elementTree);
            return newTree;
        }
    };
};



export default HOC;

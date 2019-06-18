import React from 'react';

const ReverseInherit2 = params => {
    return (BaseComponent) =>
        class extends BaseComponent{

            valueChange = (eve) => {
                console.log(eve.target.value);
                console.log(params);
                this.setState({value:eve.target.value})
            }

            toSubmit = () => {
                alert(`您要提交的值是：${this.state.value}`);
            }

            render(){
                const { value } = this.state;
                const superEle =  super.render();
                let newElement = React.cloneElement(superEle,this.props,superEle.props.children);
                if(value){
                    return (
                        super.render()
                    )
                }else{
                    newElement.props.children.splice(1,1);// 正式环境支持，dev环境会报错
                    return (newElement)
                }
                console.log(superEle);
            }
        }
}

// export default ReverseInherit1
export default ReverseInherit2
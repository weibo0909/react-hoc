import React, {Component} from 'react';
import '../../../style/higherOrderComponent/define.scss';

class Define extends Component {
    render() {
        return (
            <div>
                <h3>高阶组件（order-hight-component）</h3>
                <h4>1.从高阶函数说起</h4>
                <p className="text-indent">
                    高阶函数是至少满足下列一个条件的函数:
                    <ul>
                        <li>接受一个或多个函数作为输入</li>
                        <li>输出一个函数</li>
                    </ul>
                </p>
                <h4>2.从高阶组件定义</h4>
                <p className="text-indent">
                    高阶组件跟高阶函数极度相似，把函数的传入值和返回值从函数变成组件，那么这个函数就是高阶组件。
                </p>

                <h4>3.实现高阶组件的方式</h4>
                <ul>
                    <li>属性代理。高阶组件通过呗包裹的React组件来操作props</li>
                    <li>反向继承。高阶组件继承于被包裹的React组件</li>
                </ul>
                <p className="text-indent ">
                    属性代理顾名思义，就是替代的意思。高阶组件替传入组件管理控制props里面一切属性，管理控制包括增，删，改，查。同时他自身还有自身的状态，即state，来强化传入组件。
                    打个比方，传入组件是画一个圆，其中只有一个props属性半径radius。那我们在高阶组件中就可以随意操作这个属性值，可大可小，还可以为props增加新的属性，
                    比如增加一个color属性，表示圆的颜色；在组件外层加一个背景，美化传入组件。</p>
                <p className="text-indent ">
                    这里举一个稍微比这个难一点点的例子，受控的输入框。输入框组件的要求很简单，就是输入框中一直要有“输入：”这两个字和冒号。</p>
                <p className="text-indent ">分析：根据什么是受控组件，</p>
                <p className="text-indent ">第一我们要通过state控制input的value属性。</p>
                <p className="text-indent ">第二我们要监控input输入值得变化，每当变化是我们拿到最新输入值，然后在前面拼接上“输入：”，设置一个state就可以了。所以需要onChange监听。(属性继承例1)</p>

                <p className="text-indent ">
                    属性代理方式在高阶组件中返回的组件继承的是Component，而反向继承则是继承的传入组件，根据继承的特性，继承可获取父类的所有静态资源，非私有属性和方法，且根据情况可对原方法进行重写。
                    所以反向继承的方式也可以操作传入组件的props以及state。
                    还有一个更重的就是反向继承可以进行渲染劫持。
                </p>
                <p className="text-indent ">
                    我们来句一个简单的例子，还是一个输入框，要求: 输入框中有值时就出现提交按钮，没有值时则消失。</p>
                <p className="text-indent ">上面就是将要被继承的组件，里面有方法，但是却没有方法实体。这就是反向继承可以在高阶组件中进行方法的重写。
                    注意组件中是有提交按钮的，我们要在高阶组件中进行控制显示和隐藏，使用的就是渲染劫持。(反向代理例1)</p>
            </div>
        );
    }
}

export default Define;
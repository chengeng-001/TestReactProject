import React, { Component } from 'react'
import './index.css'

// 定义全局变量
const MyCotent = React.createContext();
const { Provider,Consumer } = MyCotent;
class A extends Component {
    state = { username: 'tom', age: 19 }

    render() {
        // UserNameContext = this.state.username;
        const { username, age } = this.state;
        return (
            <div className="parent">
                <h1>A组件</h1>
                <h4>我的用户名{this.state.username}</h4>
                <Provider value={{ username, age }}>
                    <B />
                    <C />
                </Provider>

            </div>
        )
    }
}



// 方法函数  调用变量传递函数
function B() {

    return (
        <div className="child">
            <h1>B组件</h1>
            <h4>我的用户名
                <Consumer>
                    {
                        value => {
                            console.log(value);
                            return `${value.username},年龄${value.age}`
                        }
                    }
                </Consumer>
            </h4>
            
            
        </div>
    )
}


class C extends Component {
    // 声明对象
    static contextType = MyCotent;
    render() {
        //获取组件传递的内容对象
        // console.log(this.context);
        return (
            <div className="grand">
                <h1>C组件</h1>
                <h4>我的用户名{this.context.username}, 年龄: {this.context.age}</h4>
                <D />
            </div>
        )
    }
}

class D extends Component {
    render() {
        return (
            <div className="five">
                <h1>D组件</h1>
                <h4>我的用户名???</h4>
            </div>
        )
    }
}


export default A
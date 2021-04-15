import React, { Component } from 'react'
import './index.css'

export default class Demo extends Component {


    render() {
        return (
            <div className="a">
                <h1>我是主组件</h1>
                
                {/*  第一种方式 */}
                {/* <B>
                    <C/>
                </B> */}

                {/*  第二种方式 */}
                <B render={(name) => <C name={name} />} />
                
            </div>
        )
    }
}

class B extends Component {

    state = { name: 'tom' }

    render() {
        const { name } = this.state;
        console.log(this.props);
        return (
            <div className="b">
                <h1>我是B组件</h1>
                {/*  获取标签体中的内容 */}
                {/* {(children) => children} */}

                {/*  获取父组件中嵌套内容 */}
                {/* {this.props.children} */}

                {/* 方式二 */}
 
 
                {this.props.render(name)} {/** 传递方法给父级 */}


            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div className="c">
                <h1>我是C组件</h1>


                {/*  获取父组件中的子组件中的内容传递到 孙组件的内容中 */}
                {this.props.name}
            </div>
        )
    }
}


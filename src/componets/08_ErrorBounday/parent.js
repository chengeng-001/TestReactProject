import React, { Component } from 'react'
import Child from './Child'

export default class parent extends Component {

    state = {
        hasError: ''// 用于标识子组件是否发生错误
    }

    // 如果生命周期中发生错误就会运行
    // 如果组件加载失败可以尝试给用户友好的提示信息
    static getDerivedStateFromError(error) {
        console.log(error);

        
        // 必须返回一个对象 // 控制错误给用户一个友好的提示
        return {hasError: error}
    }

    // 组件渲染引发的问题回运行该方法
    componentDidCatch() {
        //  可以利用统计错误次数
        // 反馈给后台更改数据
        console.log("渲染组件错误");       
    }

 
   

    render() {
        return (
            <div>
                <h2>Parent组件</h2>
               
                {/*  发生问题跳转页面 */}
                {this.state.hasError ? <h2>网络不稳定请稍后再试</h2>: <Child/>}
            </div>
        )
    }
}

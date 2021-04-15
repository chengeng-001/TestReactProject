import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    state = {count: 0}

    handleClick = () => {
        // console.log(111);
        // //获取原来的count 值
        // const {count} = this.state;
        // // 更新状态
        // //方法在状态更新后调用
        // this.setState({count: count+1},() =>{
        //     console.log(23);
        // })

        // 函数式setState
        //能直接获取两个参数 跟vue类似
        this.setState((state,props) =>{
            console.log(state,props);
            return {count: state.count+1}
        })
    }

    render() {
        return (
            <div>
                <h1>当前求和为 {this.state.count}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

import React, { PureComponent } from 'react'
import './index.css'


//优化代码
// PureComponent 能自动判断阀门的开关
// shouldComponentUpdate 阀门开关程序(render开关) 
export default class Demo extends PureComponent {
    state = { carName: "奔驰", status: ['小张', '小李', '小刘'] }


    // 车的类
    HandleCar = () => {
        this.setState({ carName: '宝马' });
    }

    // 学生类
    HandleStu = () => {
        const { status } = this.state;
        status.unshift('小吾');
        this.setState({status: [...status]});
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // nextProps 表示下一个要更新的props  
    //     // nextState 表示下一个要更新的state 
    //     // console.log(nextProps, nextState);
    //     // console.log(this.props, this.state);

    //     // 对数据进行拦截防止没有更新状态调动程序
    //     if (this.props.carName === nextProps.carName) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    render() {
        console.log("<parament>");
        const { carName } = this.state;
        return (
            <div>
                <h3 className="parament">{carName}</h3>
                {this.state.status}
                <button onClick={this.HandleCar} style={{ cursor: 'pointer' }}>点击换车</button>
                <button onClick={this.HandleStu}>添加人员</button>
                <Child carName="奥拓" />
            </div>
        )
    }
}


class Child extends PureComponent {


    // shouldComponentUpdate(nextProps, nextState) {

    //     console.log(nextProps, nextState);
    //     console.log(this.props, this.state);

    //     // 分析props 是否为true 
    //     return !this.props.carName === nextProps.carName;
    // }

    render() {
        console.log("<child>");
        const { carName } = this.props;
        return (
            <div>
                <h3 className="child">子模块</h3>
                <h6>我接到的车是:{carName}</h6>
            </div>
        )
    }
}


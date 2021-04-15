import React from 'react'
import ReactDOM from 'react-dom'


// 类式组件 // 只是用于找到等同方法组件的类 功能 不影响开发
// export default class Hooks extends React.Component {

//     state = { count: 0 }
//     // ref组件
//     MyRef = React.createRef();

//     add = () => {
//         this.setState((state) => {
//             return { count: state.count + 1 }
//         })
//     }

//     componentDidMount() {
//         this.Time = setInterval(() => {
//             // 函数式调用
//             this.setState(state => ({ count: state.count + 1 }));
//         }, 1000);
//     }

//     onMount = () => {
//         // 卸载组件
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        
//     }

//     componentWillUnmount() {
//         // 停止定时器
//         clearInterval(this.Time);
//     }

//     // ref 组件控制
//     change = () => {
//         // 获取ref 的值 
//         let values = this.MyRef.current.value;
//         console.log(values);
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.MyRef}/>
//                 <h2>当前求和为: {this.state.count}</h2>
//                 <button onClick={this.add}>+</button>
//                 <button onClick={this.onMount}>卸载组件</button>
//                 <button onClick ={this.change}>
//                     点击激活ref
//                 </button>
//             </div>
//         )
//     }
// }


// 函数式组件
function Hooks() {

    // hooks方法调用
    //第一个是状态 , 第二个是更新方法
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('tom');
    const MyRef  = React.useRef();
    

    // hooks 方法生命周期使用
    // 在方法中监测组件的活动内容
    // React.useEffect(() => {
    //     console.log("@");
    // },[count]);  // 添加数组 可以监测数组内的内容 // 如果不写是监测整个组件的内容


    React.useEffect(() => {
        const Time = setInterval(() => {
            // 方法返回数值
            setCount(count => count+1);
        },1000);
        
        // 返回的函数相当于ComponentWillOnMount 生命周期
        return () => {
            clearInterval(Time);

             // 测试
            // console.log("dsada");
        }
    },[]) // 如果不添加数组数值会成指数型增长

    function add() {
        // 第一种写法
        // setCount(count + 1);
        // 第二种写法
        setCount(count => count + 1);
    }

    function changeName() {
        // 更新字符串数据
        setName('jiek');
    }

    function onMount() {
        
        // 删除组件样式
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    // ref 组件展示
    function HandleRef() {
        //获取方法内的ref 内容
        let values = MyRef.current.value;
        console.log(values);
    }
    // console.log(count, setCount);
    return (
        <div>
            <input type="text" ref={MyRef}/>
            <h1>名称 {name}</h1>
            <h2>当前求和为: {count}</h2>
            <button onClick={add}>+</button>
            <button onClick={changeName}>改变名称</button>
            <button onClick={onMount}>卸载组件</button>
            <button onClick={HandleRef}>点击激活ref</button>
        </div>
    )

}

export default Hooks;



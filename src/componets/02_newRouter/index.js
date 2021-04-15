// lazy 懒加载组件  lazyLoad
// 调用Suspense 加载函数 
import React, { Component, lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'

// 调用加载时的展示信息
import Loading  from './Loading'

// 懒加载调用 
// 如果不是简写必须要有返回值
const Home = lazy(() =>  import('./Home') );

const About = lazy(() =>  import('./About') );

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <Link className="list-group-item" to="/about">About</Link>
                                <Link className="list-group-item" to="/home">Home</Link>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* 调用路由组件 */}
                                    {/* fallback 会提醒用户加载中 */}
                                    <Suspense fallback={<Loading/>}>
                                        {/* 注册路由 */}
                                        <Route path="/about" component={About} />
                                        <Route path="/home" component={Home} />
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component, Fragment } from 'react'

export default class Dome extends Component {
    render() {
        return (
            //  绕过js 编译问题 
            //  程序加载会把 fragment 碎片程序给解决
            <Fragment key={1}> {/** 如果参与循环必须要填写key 值 而且也只能填写key 值 */}
                <input type="text"/>
            </Fragment>
            // <>
            //     {/*  能直接不写标签类型直接忽略标签 */}
            //     <input type="text"/>
            // </>
        )        
    
    }
}

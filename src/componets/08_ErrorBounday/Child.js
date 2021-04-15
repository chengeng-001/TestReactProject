import React, { Component } from 'react'

export default class Child extends Component {

    state = {
        users: [{ id: '001', name: 'tom ', age: 18 },{ id: '002', name: 'jiery ', age: 18 }]
    }

    render() {

        // this.state.users = null;
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map((userObj) => {
                        return <h4 key={userObj.id}>{userObj.age} --- {userObj.name}</h4> 
                    })
                }
            </div>
        )
    }
}

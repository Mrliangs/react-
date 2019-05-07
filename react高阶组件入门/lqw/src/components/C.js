import React, { Component } from 'react'
import A from './A.js'
 class C extends Component {
     getName(){
         return '我是C组件1'
     }
    render(){
        return(
            <div>
                <input type="text" {...this.props}/>
                这是C组件
            </div>
        )
    }
}

export default A('返回')(C)
import React, { Component } from 'react'
// import A from './A.js'
import A from './A'

 class B extends Component {
     constructor(props){
         super(props)
         this.state={
             value:''
         }
     }
     changeInput(e){
         this.setState({
             value:e.target.value
         })
     }
    render(){
        return(
            <div>
                <input type="text" {...this.props}/>
                <br/>
                我的名字叫:{this.props.name}
                <br/>
                我的年龄是:{this.props.age}
                <br/>
                我的性别是:{this.props.sex}
                <br/>
                这是B组件
            </div>
        )
    }
}

export default A('提示')(B);
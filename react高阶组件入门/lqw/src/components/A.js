import React, { Component } from 'react'


export default (title) => WrappedComponent => class A extends Component {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    onInputChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render() {
        const newProps={
            value:this.state.value,
            onInput:this.onInputChange
        }
        return (
            <div className="a-container">
                <div className="header">
                    <div className="title">{title}</div>
                    <div className="xxx">x</div>
                </div>
                <div>
                    <WrappedComponent sex={'男'} {...this.props} {...newProps}/>
                </div>
            </div>
        )
    }
}

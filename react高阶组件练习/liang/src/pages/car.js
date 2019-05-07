import React, { Component } from 'react'
import Tabber from '../components/tabber'
class Car extends Component {
  render() {
    return (
      <div>
       <img className='bg' src={require('../static/images/car.png')} alt="" />
      </div>
    )
  }
}

export default Tabber(Car);

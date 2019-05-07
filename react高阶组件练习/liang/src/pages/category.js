import React, { Component } from 'react'
import Tabber from '../components/tabber'

class Category extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/category.png')} alt="" />
      </div>
    )
  }
}

export default Tabber(Category);

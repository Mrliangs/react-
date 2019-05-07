import React, { Component } from 'react';
import Tabber from '../components/tabber'

class Home extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/home.png')} alt="" />
      </div>
    );
  }
}

export default Tabber(Home);
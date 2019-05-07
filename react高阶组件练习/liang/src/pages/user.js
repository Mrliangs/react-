import React, { Component } from "react";
import Tabber from "../components/tabber";

class User extends Component {
  render() {
    return (
      <div>
         <img className='bg' src={require('../static/images/user.png')} alt="" />
      </div>
    );
  }
}

export default Tabber(User);

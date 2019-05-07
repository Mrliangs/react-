import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const tabberArr = [
  {
    img: "icon-home",
    text: "首页",
    link:'/home'
  },
  {
    img: "icon-fenlei",
    text: "分类",
    link:'/category'
  },
  {
    img: "icon-gouwuche",
    text: "购物车",
    link:'/car'
  },
  {
    img: "icon-msnui-user",
    text: "我的",
    link:'/user'
  }
];
const Tabber = WrappedComponent =>
  class Tabber extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };
    }
    itemChange = i => {
      this.setState({
        index: i
      });
    };
    render() {
      const url = window.location.href;
      return (
        <div className="tabber-container">
          <div className="tabber-children">
            <WrappedComponent />
          </div>
          <div className="tabbar">
            <div className="tabbar-content">
              {tabberArr.map((v, i) => (
                <Link
                  to={v.link}
                  key={i}
                  className={
                    "tabbar-item" + (url.indexOf(v.link) > -1 ? " active" : "")
                  }
                >
                  <div className={"iconfont " + v.img} />
                  <div>{v.text}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

export default Tabber;

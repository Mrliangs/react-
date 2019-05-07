import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import NameCard from './components/NameCard'
// import LikesButton from './components/LikesButton'
// import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import ThemedBar from './components/ThemedBar'
import ThemeContext from './theme-context';

// const tags=['山东省','十九大']
const themes = {
  light:{
    classnames:'btn btn-primary',
    bgColor:'#eeeeee',
    color:'#000'
  },
  dark:{
    classnames:'btn btn-light',
    bgColor:'#222222',
    color:'#fff'
  },
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     theme:'light'
    }
    this.changeTheme= this.changeTheme.bind(this)
  }
  changeTheme(theme){
    this.setState({
      theme,
    })
  }
  render() {
    // const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
      <div className="App"> 
      <a href="#theme-switcher"
          className="btn btn-light"
          onClick={()=>{this.changeTheme('light')}}
      >浅色主题</a>
      <a
      href="#theme-switcher"
      className="btn btn-secondary"
      onClick={()=>{this.changeTheme('dark')}}
      >深色主题</a>
     
       <ThemedBar/>
      </div>
      </ThemeContext.Provider>
    );
  }
}



export default App;

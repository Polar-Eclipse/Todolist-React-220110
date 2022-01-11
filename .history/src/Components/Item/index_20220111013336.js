import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {

  state={mouse: false}
  //handleMouse should be a callback function, so has to return a function
  // flag indicates mouse is move in or move out
  handleMouse = (flag) => {
    return () => {
     // console.log(flag);
     this.setState({mouse:flag})
    };
  };

  render() {
    const { name, done } = this.props;
    const{mouse}=this.state;
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display:mouse?'block': 'none' }}>
          delete
        </button>
      </li>
    );
  }
}

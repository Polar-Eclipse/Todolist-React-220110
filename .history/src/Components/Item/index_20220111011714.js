import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  //handleMouse should be a callback function, so has to return a function
  handleMouse = (flag) => {
    return () => {
      console.log(flag);
    };
  };

  render() {
    const { name, done } = this.props;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          delete
        </button>
      </li>
    );
  }
}

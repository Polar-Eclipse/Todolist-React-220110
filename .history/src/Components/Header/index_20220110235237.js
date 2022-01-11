import "./index.css";

import React, { Component } from "react";

export default class Header extends Component {
  handleKeyUp=(event)=>{
    console.log(event.target.value,event.keyCode)

  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Please enter your task name, and press Enter"
        />
      </div>
    );
  }
}

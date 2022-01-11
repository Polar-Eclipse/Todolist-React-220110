import "./index.css";

import React, { Component } from "react";

export default class Header extends Component {
  handleKeyUp=(event)=>{
    if(event.keyCode !==13)return
    console.log(event.target.value)

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

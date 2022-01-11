import "./index.css";

import React, { Component } from "react";

export default class Header extends Component {
  handleKeyUp=(event)=>{
    // de-construct event and get value of keyCode and target
    const{keyCode,target}=event
    if(keyCode !==13)return
    //console.log(target.value);
    this.props.addTodo(target.value)


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

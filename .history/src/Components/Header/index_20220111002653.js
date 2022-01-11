import React, { Component } from "react";
import {nanoid} from 'nanoid';
import "./index.css";

//console.log(nanoid());

export default class Header extends Component {
  handleKeyUp=(event)=>{
    // de-construct event and get value of keyCode and target
    const{keyCode,target}=event
    // check if is the Enter KEY
    if(keyCode !==13)return
    //Prepare one todo Obj
    //console.log(target.value);
    const todoObj={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)


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

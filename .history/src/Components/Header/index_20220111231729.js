import React, { Component } from "react";
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import "./index.css";

//console.log(nanoid());

export default class Header extends Component {
  static propTypes={
    // 对接收的props进行：类型，必要性的限制
    // addTodo is a function
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp=(event)=>{
    // de-construct event and get value of keyCode and target
    const{keyCode,target}=event
    // check if is the Enter KEY
    if(keyCode !==13)return
    // the name of todo can not be null
    if ( target.value.trim()===''){
      alert('can not put empty value')
      return
    }
    //Prepare one todo Obj
    //console.log(target.value);
    const todoObj={id:nanoid(),name:target.value,done:false}
    // pass the todoObj to App
    this.props.addTodo1(todoObj)
    target.value='';
   // addTodo(todoObj)

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

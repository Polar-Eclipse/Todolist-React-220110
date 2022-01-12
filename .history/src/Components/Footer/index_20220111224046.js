import "./index.css";
import React, { Component } from "react";

export default class Footer extends Component {

  //Callback function for check all
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)

  }

  render() {
    const {todos}=this.props
    // The amount of done
    //todos.reduce((pre,current)=>{},0)
    const doneCount=todos.reduce((pre,todo)=>{return pre+(todo.done ?1:0)},0)
    console.log('%%',doneCount)

    //total
    const total=todos.length



    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" Checked={doneCount===total && total !==0 ?true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>finished {doneCount}</span> / All{total}
        </span>
        <button className="btn btn-danger">delete finished tasks</button>
      </div>
    );
  }
}

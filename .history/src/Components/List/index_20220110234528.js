import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos1 } = this.props;
    return (
      <ul className="todo-main">
        {todos1.map((todo) => {
          return <Item key={todo.id} {...todo} />;
        })}
      </ul>
    );
  }
}

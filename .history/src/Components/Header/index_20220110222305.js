import "./index.css";

import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="Please enter your task name, and press Enter"
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <ul className="todo-main">
          <li>
            <label>
              <input type="checkbox" />
              <span>xxxxx</span>
            </label>
            <button className="btn btn-danger" style={{ display: "none" }}>
              delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

import './index.css';
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>finished0</span> / All2
        </span>
        <button className="btn btn-danger">delete finished tasks</button>
      </div>
        )
    }
}

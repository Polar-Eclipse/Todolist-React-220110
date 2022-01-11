import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  render() {
    const{name,done}=this.props
    return (
      <li>
        <label>
          <input type="checkbox"  defaultChecked={true}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          delete
        </button>
      </li>
    );
  }
}

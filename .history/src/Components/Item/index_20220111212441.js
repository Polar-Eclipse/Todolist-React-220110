import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Item extends Component {

  state={mouse: false}
  //handleMouse should be a callback function, so has to return a function
  // flag indicates mouse is move in or move out
  handleMouse = (flag) => {
    return () => {
     // console.log(flag);
     this.setState({mouse:flag})
    };
  }

  // callback function for check or uncheck one todo object
  handleCheck=(id)=>{
    return(event)=>{
    //console.log(id,event.target.checked)
    this.props.updateTodo(id,event.target.checked)
    }
  }

  //callback function for deleting a todo, the function is not curring
  handleDelete=(id)=>{
    if(window.confirm('Are you sure to delete it?')){
      console.log('notice App delete',id );
      //this.props.deleteTodo(id)
    }
 
  }

  render() {
    const { id,name, done } = this.props;
    const{mouse}=this.state;
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display:mouse?'block': 'none' }}>
          delete
        </button>
      </li>
    );
  }
}

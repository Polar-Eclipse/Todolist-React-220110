import React ,{Component} from'react';
import logo from "./logo.svg";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
//  Initial state
  state={
    todos:[
      {id :"001",name:"Meal",done:true},
      {id :"002",name:"Sleep",done:true},
      {id :"003",name:"Coding",done:false},
      {id :"004",name:"Shopping",done:true},

    ]
  }

  // addTodo is used to add a todo. and the received parameter os todo Obj
  addTodo=(todoObj)=>{
    //get original todos
    const{todos}=this.state;
    // add one more todo
    const newTodos=[todoObj,...todos]
    //refresh state
    this.setState({todos:newTodos})

  }

  render() {
    const{todos}=this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={this.addTodo} />
        <List todos={todos}/>
        <Footer />
      </div>
    </div>
    )
  }
}



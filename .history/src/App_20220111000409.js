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

  addTodo=(data)=>{
    console.log('App',data)

  }

  render() {
    const{todos}=this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodoData={this.addTodo} />
        <List todos={todos}/>
        <Footer />
      </div>
    </div>
    )
  }
}



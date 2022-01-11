import React ,{Component} from'react';
import logo from "./logo.svg";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
//  Initial state
  state={
    todo:[
      {id :"001",name:"Meal",done:true},
      {id :"002",name:"Sleep",done:true},
      {id :"003",name:"Coding",done:false},

    ]
  }
  render() {
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
    )
  }
}



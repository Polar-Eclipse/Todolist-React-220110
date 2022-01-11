import React ,{Component} from'react';
import logo from "./logo.svg";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
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



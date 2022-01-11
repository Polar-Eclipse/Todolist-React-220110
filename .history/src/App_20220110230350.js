import React ,{Component} from''react';
import logo from "./logo.svg";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

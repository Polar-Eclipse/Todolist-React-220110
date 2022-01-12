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

  // set a function that Header can send data to App
  // addTodo is used to add a todo. and the received parameter os todo Obj
  addTodo=(todoObj)=>{
    //get original todos
    const{todos}=this.state;
    // add one more todo
    const newTodos=[todoObj,...todos]
    //refresh state
    this.setState({todos:newTodos})

  }

  //updateTodo is used for updating a obj
  updateTodo=(id,done)=>{
  //get the state of todos
  const{todos}=this.state
  //match and process data
  const newTodos=todos.map((todoObj)=>{
    if(todoObj.id===id)return{...todoObj,done}//if (id,a) ,then  {...todoObj,a:done}
     else return todoObj;
  })
    this.setState({todos:newTodos})
  }


  //deleteTodo is used for delete a obj
  deleteTodo=(id)=>{
    // get previous todos
    const{todos}=this.state
    //delete the specified id obj of todo
   const newTodos= todos.filter((todoObj)=>{
      return todoObj.id !==id
    })
    //update state
    this.setState({todos:newTodos})
  }

    //  checkAll is used to checkAll
    checkAllTodo=(done)=>{
      // get previous todos
      const{todos}=this.state
      //process data
      const newTodos=todos.map((todoObj)=>{
        return {...todoObj, done:done}

      })
      
      //update state
      this.setState({todos:newTodos})

    }


    //clear all finished tasks
    clearAllDone=()=>{
      // get previous todos
      const{todos}=this.state
      // filter data
      const newTodos=todos.filter((todoObj)=>{
        return todoObj.done===false
        //or !todoObk.done
      })

      //update state
      this.setState({todos:newTodos})
      }


  render() {
    const{todos}=this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={this.addTodo}  />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
      </div>
    </div>
    )
  }
}



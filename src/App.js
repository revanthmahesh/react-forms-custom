import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './advanced/stateup'
import MouseTracker from './advanced/renderprop';
import store  from "./redux-smart/store";
import  TodoList  from "./redux-smart/todo";
import ReactDOM from 'react-dom';

const renderer = () => {
  ReactDOM.render(
    // Render the TodoApp Component to the <div> with id 'root'
    // spreading state as props is faster as it happen at once, than calling like todoList={store.getState().todoList}
    <TodoList
    {...store.getState()}
    />,
    document.getElementById('todoTag')

  )
}

class App extends Component {
  constructor(){
    super();
    this.state = {list:[]}
  }
  componentDidMount(){
    renderer()
    // store.subscribe(()=>{
    //   // console.log(store.getState().todoList)
    //   // this.setData =  store.getState().todoList;
    //   this.setState({list:store.getState().todoList})
    // })
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calculator/>
        <MouseTracker/>
        <p>redux Implementation</p>
        <div id = 'todoTag'></div>
        {/* <TodoList todoLists = {this.state.list}/> */}
      </div>
    );
  }
  
}
store.subscribe(renderer);
export default App;

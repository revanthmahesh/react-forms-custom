import React, {Component} from 'react';
import  store from "./store";
import FilterTodo from './todoFilter'
let nextTodoId = 0;
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={'todo':''};
        // this.todos = this.props.todoList || [];
    }
    onChanged = (e)=>{
        this.setState({todo:e.target.value})
    }
    clicked = () =>{
     //future store here!!
     if(!this.state.todo){
         return
     }
        store.dispatch({
          type: 'ADD_TODO',
          text: this.state.todo,
          id: nextTodoId++
        });
        this.setState({todo:''})
    }

    visibleDataFilter = (todoList,type) => {
      switch (type) {
          case 'SHOW_ACTIVE':
             return todoList.filter(ele=>!ele.completed) 
              break;
          case 'SHOW_COMPLETED':
          return todoList.filter(ele=>ele.completed) 
            break;
          default:
           return todoList
            break;
      }
    }
    render(){
        // console.log(store.getState())
        const seeFilters = this.visibleDataFilter(this.props.todoList,this.props.VisibilityFilter)
        return(
            <div>
                <p>Add To Do</p>
                <input value={this.state.todo} onChange={this.onChanged}/>
                <button onClick = {this.clicked}>addTodo</button>
             <ul>
             {seeFilters.map(todo =>
               <li key={todo.id}
                    onClick={() => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: todo.id
                    });
                    }}
                    style={{
                    textDecoration:
                        todo.completed ?
                        'line-through' :
                        'none'
                    }}>
      {todo.text}
    </li>
             )}
           </ul>
           <FilterTodo current= {this.props.VisibilityFilter}/>
           </div>
        )
    }
} 
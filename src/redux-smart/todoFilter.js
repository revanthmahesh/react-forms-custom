import React,{ Component } from "react";
import  store from "./store";

export default class FilterTodo extends Component{
    constructor(){
        super();
        this.collection = [{id:1,filter:'SHOW_ALL',value:'All'},{id:2,filter:'SHOW_ACTIVE',value:'Active'},{id:3,filter:'SHOW_COMPLETED',value:'Completed'}]
    }
    render(){
        return(
     <p>
        Show:
        {this.collection.map(ele =>
             <span key={ele.id}>
             {' '}
                <FilterLink 
                 filter={ele.filter} activeFilter={this.props.current}
             ><span>{ele.value}</span>
             </FilterLink>
             </span>
        )}
       
        </p>)
    }
}

function FilterLink({children,filter, activeFilter}){
    if(activeFilter === filter){
        return(
            <span>{children}</span>
        )
    }
    return (
            <a href='#'
                onClick={e => {
                    e.preventDefault();
                    store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                    });
                }}
            >
                {children}
            </a>
    )
    }
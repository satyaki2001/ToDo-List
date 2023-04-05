import React, {useReducer, useState} from "react";
import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
//mock data
import data from '../data.json';

const initialState = {
  toDoList: data
};

const reducer = (state, action) =>{
  switch (action.type){
    case "Toggle":
      return {
        ...state,
        toDoList: state.toDoList.map((task)=>{
          if(task.id === Number(action.payload)){
            return {...task, complete: !task.complete};
          }
          return task;
        })
      };
    case "Filter":
      return {
        ...state,
        toDoList: state.toDoList.filter((task) => !task.complete)
      };
      
    case "Add_Task":
      return{
        ...state,
        toDoList: [
          ...state.toDoList,
          {
            id: state.toDoList.length + 1,
            task: action.payload.userInput,
            description: action.payload.description,
            complete: false
          }

        ]
      };

      case "Delete_Task":
        return {
          toDoList: state.toDoList.filter((task) => task.id !== action.payload)
        };
      default:
        return state;
  }
};

function Main(){
    
   const [state, dispatch] = useReducer(reducer, initialState);

    const handleToggle = (id) => {
     dispatch({type: "Toggle", payload: id});
    };
  
    const handleFilter = () => {
     dispatch({type: "Filter"});
    };
  
    const addTask = (userInput, description) => {
     dispatch({
      type: "Add_Task",
      payload: {userInput: userInput, description: description}
     });
    };
  
    const handleDelete = (id) => {
     dispatch({type: "Delete_Task", payload: id})
    }

    return(
    <div className="Main">
    <Header />
    <div className="main-page">
    <ToDoForm addTask={addTask}/>
      <ToDoList toDoList={state.toDoList} handleToggle={handleToggle} handleFilter={handleFilter}  handleDelete={handleDelete}/>
    </div>
    </div>
    );
}

export default Main;
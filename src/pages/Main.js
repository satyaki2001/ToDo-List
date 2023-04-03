import React, {useState} from "react";
import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
//mock data
import data from '../data.json';

function Main(){

    const [ toDoList, setToDoList ] = useState(data);

    const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
        return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
      });
      setToDoList(mapped);
    }
  
    const handleFilter = (e) => {
      let filtered = toDoList.filter(task => {
        return !task.complete;
      });
      setToDoList(filtered);
    }
  
    const addTask = (userInput, description) => {
      let copy = [...toDoList];
      copy = [
        ...copy, 
        { 
          id: toDoList.length + 1, 
          task: userInput, 
          description: description, // include the description value
          complete: false 
        }
      ];
      setToDoList(copy);
    }
  
    const handleDelete = (id) => {
      let newList = toDoList.filter(task => {
        return task.id !== id;
      });
      setToDoList(newList);
    }

    return(
    <div className="Main">
    <Header />
    <div className="main-page">
    <ToDoForm addTask={addTask}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}  handleDelete={handleDelete}/>
    </div>
    </div>
    );
}

export default Main;
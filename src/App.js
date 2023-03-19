import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
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

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const handleDelete = (id) => {
    let newList = toDoList.filter(task => {
      return task.id !== id;
    });
    setToDoList(newList);
  }

  return (
    <div className="App">
      <ToDoForm addTask={addTask}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}  handleDelete={handleDelete}/>
 
    </div>
  );
}

export default App;

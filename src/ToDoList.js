import React from 'react';
import ToDo from './ToDo';




const ToDoList = ({toDoList, handleToggle, handleFilter, handleDelete}) => {



    return (
        <div className='ToDoList '>
        <div className='list-head'>
        <h2>Tasks</h2>
        <span >click on the task after completion</span>
        </div>
        <div className='task'>


        {toDoList.map(todo => {
                return (
                    <div className='inner-box'>                  
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}  handleDelete={handleDelete}  />
                    </div>
  
                )
            })}
            
        </div>
            <button className='btn btn-danger' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;
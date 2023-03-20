import React from 'react';

const ToDo = ({todo, handleToggle, handleDelete}) => {
    
    const deleteTask = (id) => {
        handleDelete(id);
      }


    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


 

    return (
            <div className='todo-main'>
            <div>
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick}  className={todo.complete ? "todo strike" : "todo "}>
            <span><i class="fa-solid fa-circle-chevron-right"></i></span>  {todo.task}
            </div>
            </div>
 
            <div className="delete-container">
            <i className="fa-solid fa-trash delete-button" onClick={() => deleteTask(todo.id)}></i>
            </div>
            </div>            


    );
};

export default ToDo;
import React, {useState} from 'react';

const ToDo = ({todo, handleToggle, handleDelete}) => {
  const [isOpen, setIsOpen] = useState(false);   
    const deleteTask = (id) => {
        handleDelete(id);
      }


    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    }

    return (
            <div className='todo-main'>
            <div className='todo-desc'>
            <span><i class="fa-solid fa-circle-chevron-right" name="desc-toggeler" onClick={toggleAccordion} ></i></span>
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick}  className={todo.complete ? "todo strike" : "todo "}>
            <span className='todo-head'>{todo.task}</span>  
            </div>
            {isOpen && (
          <div class="panel">
            <p>{todo.description}</p>
          </div>
        )}

            </div>
 
            <div className="delete-container">
            <i className="fa-solid fa-trash delete-button" onClick={() => deleteTask(todo.id)}></i>
            </div>
            </div>            


    );
};



export default ToDo;
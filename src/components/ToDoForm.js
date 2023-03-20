import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput === ""){
            return;
        }else{
            addTask(userInput);
        }
        setUserInput("");
    }

    return (
   <div className='ToDoForm'>
   <span className='todoform-heading'>Add Tasks Here!</span>
    <form className="main-form form-control " onSubmit={handleSubmit}  >

    <div className="input-group mb-3 input-form">

     <input type="text" className="form-control" maxLength="18" minLength="3" value={userInput} onChange={handleChange} placeholder="Enter task..."/>
    <button className="btn btn-add" type="submit" id="button-addon2">+Add Task</button>
    </div> 
    </form>
   </div>
    );
};

export default ToDoForm;
import React, { useState } from 'react';
import Header from './Header';


const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

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
          <Header />
    <form className="main-form form-control " onSubmit={handleSubmit}  >

    <div className="input-group mb-3 input-form">

     <input type="text" class="form-control" maxlength="18" minLength="3" value={userInput} onChange={handleChange} placeholder="Enter task..."/>
    <button className="btn btn-warning" type="submit" id="button-addon2">+Add Task</button>
    </div> 
    </form>
    <footer className='footer'>Created by Satyaki || Copyright <span id='year'></span></footer>
   </div>


    );
};

export default ToDoForm;
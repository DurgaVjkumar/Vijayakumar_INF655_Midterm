import React, { useState } from 'react'
import './TaskForm.css'


const TaskForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setenteredDescription] = useState('');

    const titleChangeHandler = (e) => { //the event's target values is sent as a parameter to 'setEnteredTitle'
        setEnteredTitle(e.target.value); //this then sets that value
    };

    const descrptChangeHandler = (e) => {
        setenteredDescription(e.target.value); //e.target.value is ALWAYS a string, that's why the useState is initialized to string
    };

    //submit event handler
    const submitHandler = (event) => {
        event.preventDefault(); //prevent default browser submission

        //an object that combines and stores all the user inputed data
        const taskInfo = {
            id : Math.random().toString(), //adding a new key 'id'
            title: enteredTitle, 
            description: enteredDescription
        };

        //'onSaveTaskData' comes from 'App' component
        //'taskInfo' is the user inputed object that is now the parameter 
        //for the function 'addTaskHandler' which 'onSaveTaskData' points to in App component
        props.onSaveTaskItem(taskInfo);
        
        //resets the input boxes to empty
        setEnteredTitle('');
        setenteredDescription('');
    };

  return (
    <div className='card'>
    <form onSubmit={submitHandler}> 
        <h2>Add a task to the Task List</h2>
        <div className='new-task__control'>
            <input 
                type='text' 
                placeholder='Task Title'
                value={enteredTitle} //'enteredTitle' is the useState variable
                onChange={titleChangeHandler} 
            />

            <input 
                type='text'
                placeholder='Task Description' 
                value={enteredDescription} 
                onChange={descrptChangeHandler}  
            />
        </div>
        <div className='new-task' >
            <button type='submit'>Add Task</button>
        </div>
    </form>
    </div>
  )
}

export default TaskForm
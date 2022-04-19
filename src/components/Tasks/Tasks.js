import React from 'react'
import { TaskItem } from './TaskItem';
import './Tasks.css'

// props from App.js:
// items -- the list of tasks
// searchTxt -- the search term entered in the search box 
// onDeleteTaskItem -- function that's passed on to TaskItem.js
// onCheckTaskItem -- function that's passed on to TaskItem.js

const Tasks = (props) => {
    if(props.items.length === 0){
        return <h2>No Tasks.</h2>;
    }

    return (
        <ul className='task-list'>
            {/* use .map function to loop through the array and create a TaskItem component for each array element */}
            {props.items
                .filter((task)=> task.title.toLowerCase().includes(props.searchTxt.toLowerCase()))            //filter the items first by search term, then map
                .map((task) => (
                    <TaskItem 
                        key={task.id} 
                        id={task.id}
                        title={task.title} 
                        description={task.description}
                        checked={task.checked}
                        deleteHandler={props.onDeleteTaskItem}
                        checkboxHandler = {props.onCheckTaskItem}
                    />
            ))}
        </ul>
    )
};

export default Tasks;

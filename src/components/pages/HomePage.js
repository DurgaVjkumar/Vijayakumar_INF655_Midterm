import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
//import '../../App.css';
import TaskData from '../Tasks/TaskData';
import  Tasks  from '../Tasks/Tasks';
import TaskForm from '../Tasks/TaskForm';
import SearchTask from '../Tasks/SearchTask';
// import Header from './Header';
// import Footer from './Footer';

const HomePage = () => {
  const [tasks, setTasks] = useState(TaskData);
  const [search, setSearch] = useState('');

  const addTaskHandler = (task)=>{
    task.id = uuidv4(); //attach a unique id to item
    
    //use an anonymous function in 'setTasks' that automatically receives 
    //a snapshot of the previous state
    setTasks( (prevTasks) =>{
      return [task, ...prevTasks]; //adds task to the list
    });
  };

  const deleteTaskHandler = (id)=>{
    //console.log(id);
    const taskList = tasks.filter((task)=>task.id !== id);
    setTasks(taskList);
  };
  const checkboxTaskHandler = (id) => {
    const taskList = tasks.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setTasks(taskList);
  };

  return (
        <div >
            <TaskForm onSaveTaskItem={addTaskHandler}></TaskForm>
            <SearchTask
                search={search}
                setSearch={setSearch}
            />
        
            <Tasks 
                items={tasks}
                searchTxt={search}
                onDeleteTaskItem={deleteTaskHandler}
                onCheckTaskItem={checkboxTaskHandler}
            /> 
        </div>
        )
}

export default HomePage

// Midterm:
// CRUD and Navigation for Task Manager
// Step 1: Continue with the Task Manager application. 
// Step 2: Create a component for side navigation.  
// Step 3: Create all the subpages like the Home page, About page, 
// and Task List Page in the side navigation. (If you want to include sign-in or user info page you can)
// Step 4: Create navigation for all the subpages 
// Your application should add the task to the task list 
// Able to search the tasks from the task list 
// Delete the Task 
// Should be able to edit the Task from the task list. 
// Step 5: After successful execution save all the changes to the local system.
// Step 6: Create a new repository on GitHub named "your-last-name_INF655". 
// Confirm you have committed all changes to your local repository with git. Then push your local git repository code to your GitHub repository.
// Step 7: Copy the URL to your GitHub repository. 
// Step 8: In the submission area, click the "Write Submission" button and paste the URL to your GitHub repository. 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<HomePage/>} /> 
          <Route path='/about' element={<AboutPage/>} /> 
        </Routes>  
        <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}

export default App
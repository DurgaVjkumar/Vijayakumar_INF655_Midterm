import React from 'react'
// import Footer from './Footer'
// import Header from './Header'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
       <div className='card'>
           <h1>About this application</h1>
           <p>
               <Link to="/">Back to Home</Link>
           </p>
       </div>
   
  )
}

export default AboutPage
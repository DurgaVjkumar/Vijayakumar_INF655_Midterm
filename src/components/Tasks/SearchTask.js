import React from 'react'
import './SearchTask.css'

const SearchTask = (props) => {

  return (
    <div className='card search_form'>
        <h2>Search Task from Task List</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='serach for task'
                value={props.searchTxt}
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchTask
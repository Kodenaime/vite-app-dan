import React from 'react'
 
import './home.css'
import Task from '../components/Task'

const Home = () => {
  return (
    <div className='app-wrap'>
        <h1>To-Do List</h1>
        <Task /> 
        <div className="filters">
            <label htmlFor="">
                <h3>Completion:</h3>
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="true">Completed</option>
                    <option value="false">Incomplete</option>
                </select>
            </label>

            <label htmlFor="">
                <h3>Priority:</h3>
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </label>

            <label htmlFor="">
                <h3>Deadline:</h3>
                <input type="date" />
            </label>

        </div>

    </div>
  )
}

export default Home
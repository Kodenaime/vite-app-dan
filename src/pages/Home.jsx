import React, { useState } from 'react'
import './home.css'
import Task from '../components/Task'
import TaskList from '../components/TaskList'

const Home = () => {

    const [tasks, setTasks] = useState([
    {
        id: 1,
        description: "Kode Task Dynamic",
        deadline: "2024-11-16",
        priority: "low",
        completed: false 
    },
    {
        id: 2,
        description: "Kelechi Task Dynamic",
        deadline: "2024-11-16",
        priority: "medium",
        completed: false 
    },
    {
        id: 3,
        description: "Daniel Task Dynamic",
        deadline: "2024-11-16",
        priority: "high",
        completed: false 
    },
])

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
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default Home
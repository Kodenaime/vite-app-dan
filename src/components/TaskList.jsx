import React from 'react'

const TaskList = ({ tasks }) => {
  return (
    <ul>
        {
            tasks.map(() => (
            <li className={`task`}>
                <input type="text" />
                <input type="date" />
                <select name="" id="" >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label htmlFor="">
                    Completed:
                    <input type="checkbox" />
                </label>
                <button className='btn-new'>Delete</button>
                <button className='btn' id='archive-btn'>Archive</button>
            </li>
            ))
        }
    </ul>
  )
}

export default TaskList
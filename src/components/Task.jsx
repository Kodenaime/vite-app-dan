import React from 'react'

const Task = () => {
  return (
    <form>
        <input type="text" placeholder='task description' required />
        <input type="date" required />
        <select name="" id="">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <label htmlFor="">
            Completed:
            <input type="checkbox" />
        </label>
        <button className='btn'>Add Task</button>
    </form>
  )
}

export default Task
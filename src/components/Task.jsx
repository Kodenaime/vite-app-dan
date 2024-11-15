import React, { useState } from 'react'

const Task = () => {

  const [description, setDescription] = useState("") 
  const [deadline, setDeadline] = useState("")
  const [priority, setPriority] = useState("low")
  const [completed, setCompleted] = useState("false")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description,
      deadline,
      priority,
      completed,
    };
    console.log(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input value={description} onChange={(e) => {setDescription(e.target.value)}} type="text" placeholder='task description' required />

        <input value={deadline} onChange={(e) => {setDeadline(e.target.value)}} type="date" required />

        <select name="" id="" value={priority} onChange={(e) => {setPriority(e.target.value )}} >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <label htmlFor="">
            Completed:
            <input type="checkbox" checked={completed} onChange={(e) => {setCompleted(e.target.checked)}} />
        </label>
        <button className='btn'>Add Task</button>
    </form>
  )
}

export default Task
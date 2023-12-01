import React, { useState } from 'react';
// Task Component
const Task = ({ task, onDelete, onToggle }) => {
return (
<div className={`task ${task.completed ? 'completed' : ''}`}>
<span className="task-text" onClick={() => onToggle(task.id)}>
{task.text}
</span>
<button className="delete-btn" onClick={() => onDelete(task.id)}>
Delete
</button>
</div>
);
};const App = () => {
  const [tasks, setTasks] = useState([
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: true },
  { id: 3, text: 'Task 3', completed: false },
  ]);
  const addTask = () => {
  const newTask = {
  id: tasks.length + 1,
  text: `Task ${tasks.length + 1}`,
  completed: false,
  };
  setTasks([...tasks, newTask]);
  };
  const deleteTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const toggleTask = (taskId) => {
  setTasks(
  tasks.map((task) =>
  task.id === taskId ? { ...task, completed: !task.completed } :
  
  task
  )
  );
  };
  return (
  <div className="app">
  <h1>To-Do List</h1>
  <button onClick={addTask}>Add Task</button>
  <div className="task-list">
  {tasks.map((task) => (
  <Task
  key={task.id}
  task={task}
  
  onDelete={deleteTask}
  onToggle={toggleTask}
  />
  ))}
  </div>
  </div>
  );
  };
  export default App;
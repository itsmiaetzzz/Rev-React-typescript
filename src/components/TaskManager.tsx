import React from "react";
import useTaskManager from "./useTaskManager";
import "./TaskManager.css";

export const TaskManager: React.FC = () => {
  const {
    tasks,
    addTask,
    completeTask,
    updateTask,
    handleSearch,
    searchKeyword,
  } = useTaskManager();

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchKeyword}
          placeholder="Search Task"
        />
      </div>

      <div className="task">
        <input
          type="text"
          value={tasks}
          onChange={(e) => updateTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, e.target.value)}
              />
              <button onClick={() => completeTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

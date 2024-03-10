import { useState } from "react";
import { nanoid } from "nanoid";

interface Task {
  id: string;
  title: string;
}

const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const addTask = (title: string) => {
    if (title.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: nanoid(),
      title: title.trim(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const completeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  
  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, updatedTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, title: updatedTitle } : task))
    );
  };

  const handleSearch = (searchKeyword: string) => {
    setSearchKeyword(searchKeyword);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return { tasks: filteredTasks, addTask, completeTask, deleteTask, updateTask, handleSearch , searchKeyword};
};

export default useTaskManager;

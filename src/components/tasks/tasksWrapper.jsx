import { useContext, useEffect, useState } from "react";
import Task from "./task/task";
import crudCtx from "../../store/crudContext";

export default function TaskWrapper() {
  const [todoData, setTodoData] = useState([]);
  const ctx = useContext(crudCtx);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/todos/");
      const res = await response.json();
      setTodoData(res);
      console.log(res);
    };

    fetchData();
  }, []);

  const handleDeleteTask = (taskId) => {
    setTodoData((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-full flex flex-col items-center justify-between scroll-py-7 overflow-scroll">
      {todoData.map((task) => (
        <Task
          key={task.id}
          task={task}
          id={task.id}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

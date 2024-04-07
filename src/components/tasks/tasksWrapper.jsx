import { useContext, useEffect, useState } from "react";
import Task from "./task/task";
import crudCtx from "../../store/crudContext";

export default function TaskWrapper() {
  const ctx = useContext(crudCtx);

  console.log(ctx.tasks)

  useEffect(() => {
    ctx.fetchData();
  }, []);

  const handleDeleteTask = (taskId) => {
    setTodoData((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-full flex flex-col items-center justify-between scroll-py-7 overflow-scroll">
      {ctx.tasks.map((task) => (
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

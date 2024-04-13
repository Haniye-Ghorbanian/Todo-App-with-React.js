import { useContext, useEffect, useState } from "react";
import Task from "./task/task";
import crudCtx from "../../store/crudContext";

export default function TaskWrapper({ onTask }) {
  const ctx = useContext(crudCtx);

  

  useEffect(() => {
    ctx.fetchData();
  }, []);

  const handleDeleteTask = (taskId) => {
    ctx.handleTasks({ type: "DELETE_TASK", payload: taskId });
  };

  return (
    <div className="w-full flex flex-col items-center justify-between scroll-py-7">
      {ctx.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          id={task.id}
          onDelete={handleDeleteTask}
          onTask={onTask}
        />
      ))}
    </div>
  );
}

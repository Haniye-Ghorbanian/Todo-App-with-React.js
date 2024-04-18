import { useContext, useEffect } from "react";
import Task from "./task/task";
import crudCtx from "../../store/crudContext";

export default function TaskWrapper({ onTask }) {
  const ctx = useContext(crudCtx);

  useEffect(() => {
    ctx.fetchData();
  }, []);

  

  return (
    <div className="w-full flex flex-col items-center justify-between scroll-py-7">
      {ctx.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          id={task.id}
          onTask={onTask}
        />
      ))}
    </div>
  );
}

import { useContext } from "react";
import Task from "./task/task";
import crudCtx from "../../store/crudContext";

export default function TaskWrapper() {
  const ctx = useContext(crudCtx);
  return (
    <div className="w-full flex flex-col items-center justify-between scroll-py-7 overflow-scroll">
      {ctx.tasks.map((task, index) => {
        <Task key={index} task={task}/>;
      })}
    </div>
  );
}

import { useContext } from "react";
import BinIcon from "../binIcon";
import EditIcon from "../editIcon";
import taskOptionsContext from "../../../../../store/taskOptionsContext";

export default function TaskOptions({ id, onDelete, task, onTask }) {
  const ctx = useContext(taskOptionsContext);

 

  return (
    <>
      <div className="w-12 h-16 flex items-center justify-between space-x-4">
        <EditIcon task={task} onTask={onTask} />
        <BinIcon id={id} onDelete={onDelete} />
      </div>
    </>
  );
}

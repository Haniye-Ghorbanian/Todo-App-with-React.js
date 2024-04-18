import BinIcon from "../binIcon";
import EditIcon from "../editIcon";

export default function TaskOptions({ id, onDelete, task, onTask }) {
  return (
    <>
      <div className="w-12 h-16 flex items-center justify-between space-x-4">
        <EditIcon task={task} onTask={onTask} />
        <BinIcon id={id} onDelete={onDelete} task={task} />
      </div>
    </>
  );
}

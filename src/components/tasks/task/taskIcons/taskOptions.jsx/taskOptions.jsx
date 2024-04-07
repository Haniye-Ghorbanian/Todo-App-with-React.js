import { useContext } from "react";
import BinIcon from "../binIcon";
import EditIcon from "../editIcon";
import taskOptionsContext from "../../../../../store/taskOptionsContext";

export default function TaskOptions({ id, onDelete }) {
  const ctx = useContext(taskOptionsContext);
  // console.log(ctx.isBarClicked);
  return (
    <>
      <div className="w-12 h-inherit flex items-center justify-between space-x-4">
        <EditIcon />
        <BinIcon id={id} onDelete={onDelete} />
      </div>
    </>
  );
}

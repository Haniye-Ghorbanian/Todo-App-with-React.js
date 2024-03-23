import BinIcon from "../binIcon";
import EditIcon from "../editIcon";

export default function TaskOptions() {
  return (
    <div className="w-14 h-inherit flex items-center justify-between space-x-4">
      <EditIcon />
      <BinIcon />
    </div>
  );
}

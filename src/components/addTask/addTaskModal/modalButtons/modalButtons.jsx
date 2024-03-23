import Add from "./cancel";
import Cancel from "./add";

export default function ModalButtons({ taskRef }) {
  console.log(taskRef)
  return (
    <div className="w-full flex items-center justify-end space-x-5">
      <Add prop={taskRef} />
      <Cancel />
    </div>
  );
}

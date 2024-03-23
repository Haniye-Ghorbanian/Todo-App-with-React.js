import { useContext, useRef, useEffect } from "react";
import crudCtx from "../../../../store/crudContext";

export default function TitleInput({ getRef }) {
  const taskTitleRef = useRef(null);
  const ctx = useContext(crudCtx);

  const handleChange = () => {
    getRef(taskTitleRef.current?.value);
    console.log(taskTitleRef.current?.value)
  };

  return (
    <div>
      <label className="font-semibold text-lg" id="title">
        Title
      </label>
      <input
        name="title"
        type="text"
        className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
        ref={taskTitleRef}
        onChange={handleChange}
      />
    </div>
  );
}

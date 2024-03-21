export default function AddTaskPanel() {
  return (
    <div className="w-full h-screen absolute top-0 z-20 flex items-center justify-center backdrop-blur-sm">
      <div className="w-4/5 h-3/5 flex flex-col items-start justify-between bg-white shadow-lg px-10 py-16 rounded-lg">
        <div className="flex flex-col space-y-5 w-full">
          <div>
            <label className="font-semibold text-lg">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Deadline</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-end space-x-5">
          <button className="text-md border-2 text-gray-500 border-blue-600 px-5 py-2 rounded-md">
            cancel
          </button>
          <button className="font-semibold text-md text-white bg-blue-600 px-5 py-2 rounded-md">
            add
          </button>
        </div>
      </div>
    </div>
  );
}

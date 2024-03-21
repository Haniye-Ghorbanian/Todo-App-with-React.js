export default function DatePicker() {
  return (
    <div>
      <label className="font-semibold text-lg" id="deadline">
        Deadline
      </label>
      <input
        name="deadline"
        type="text"
        className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
      />
    </div>
  );
}

export default function TitleInput() {
  return (
    <div>
      <label className="font-semibold text-lg" id="title">
        Title
      </label>
      <input
        name="title"
        type="text"
        className="w-full p-2 border border-gray-400 caret-blue-800 rounded-md focus:outline-none focus:border-blue-600 focus:border-2 mt-3"
      />
    </div>
  );
}
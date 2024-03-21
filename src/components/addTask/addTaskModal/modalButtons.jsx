export default function ModalButtons() {
    return(
        <div className="w-full flex items-center justify-end space-x-5">
          <button className="text-md border-2 text-gray-500 border-blue-600 px-5 py-2 rounded-md">
            cancel
          </button>
          <button className="font-semibold text-md text-white bg-blue-600 px-5 py-2 rounded-md">
            add
          </button>
        </div>
    )
}
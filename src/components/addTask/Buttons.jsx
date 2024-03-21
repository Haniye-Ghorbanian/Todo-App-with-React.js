export default function AddTaskBtn() {
    return (
      <div className="w-full flex items-center justify-end">
        <button className="w-14 aspect-square  rounded-full shadow-sm bg-blue-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
          >
            <title />
  
            <g id="Complete">
              <g data-name="add" id="add-2">
                <g>
                  <line
                    stroke="#ffffff" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    x1="12"
                    x2="12"
                    y1="19"
                    y2="5"
                  />
  
                  <line
                    stroke="#ffffff" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    x1="5"
                    x2="19"
                    y1="12"
                    y2="12"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    );
  }
  
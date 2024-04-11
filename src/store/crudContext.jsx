import { createContext, useContext } from "react";
import { useReducer } from "react";

const crudCtx = createContext({
  tasks: [],
  task: {},
  currentTask: {},
  handleTasks: () => {},
  fetchData: () => {},
  addTask: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "SET_TASK": {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    case "ADD_TASK": {
      return {
        ...state,
        task: {
          title: action.payload.title,
          description: action.payload.description,
          is_done: action.payload.is_done,
        },
      };
    }

    case "HANDLE_DONE": {
      return {
        ...state,
        task: {
          ...state.task,
          is_done: action.payload,
        },
      };
    }

    case "DELETE_TASK": {
      return {
        ...state,
        task: state.tasks.filter(task => task.id !== action.payload)
      }
    }

    case "SET_SELECTED_TASK": {
      return {
        ...state,
        currentTask: action.payload,
      };
    }
  }
}

export function CrudCtxProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    task: { title: "", description: "", is_done: false },
    currentTask: {},
  });

 

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/todos/");
    const result = await response.json();
    dispatch({ type: "SET_TASK", payload: result });
  };
  
  const addTask = async () => {
    
    try {
      await fetch("http://127.0.0.1:8000/api/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.task),
      });

      // dispatch({
      //   type: "ADD_TASK",
      //   payload: { title: "", description: "", is_done: false },
      // });

      fetchData(); 

    } catch (error) {
      console.log(`the post error: ${error}`);
    }
  };

  
  return (
    <crudCtx.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        handleTasks: dispatch,
        fetchData,
        addTask,
        currentTask: state.currentTask,
      }}
    >
      {props.children}
    </crudCtx.Provider>
  );
}

export default crudCtx;

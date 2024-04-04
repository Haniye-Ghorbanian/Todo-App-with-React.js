import { createContext, useState } from "react";

const taskOptionsContext = createContext({
  isBarClicked: false,
  setIsBarClicked: () => {}
});

export function TaskOptionContextProvider(props) {
  const [isBarClicked, setIsBarClicked] = useState(false)
    
  return (
    <taskOptionsContext.Provider value={{ isBarClicked, setIsBarClicked }}>
      {props.children}
    </taskOptionsContext.Provider>
  );
}

export default taskOptionsContext;

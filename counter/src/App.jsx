import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const increaseValue = () => {
    if (counter <= 20) {
      counter = counter + 1;
      setCounter(counter);
    }else 
    //setCounter(counter + 1);
  }
  const removeValue = () => {
    counter = counter - 1;
    //setCounter(counter + 1);
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={increaseValue}>Increase Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value:{counter}</button>
    </>
  );
}

export default App;

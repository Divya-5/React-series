import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  //useref
  const passwordRef = useRef(null);

  //useCallback to Optimize
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*[]+_={}~`";
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, num, char, setPassword]); //if only password is given it will go in infinite loop

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect ti run if something changes
  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3"> Password Generator </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          value={password}
          placeholder="password"
          className="outline-none w-full py-1 px-3"
          style={{ backgroundColor: "lightgray" }}
          type="text"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={num}
            id="numberInput"
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label>Numbers </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label>Characters </label>
        </div>
      </div>
    </div>
  );
}

export default App;

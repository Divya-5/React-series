import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Divya",
    age: 21,
  };
  let myArr = ["Divya", 21];

  return (
    <>
      <Card
        username="codeandchai"
        btnText="clickMe"
        someObj={myObj}
        newArr={myArr}
      />
      <Card username="divya" />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Demo from "./components/Demo";
import DemoList from "./components/DemoList"
import { useState,  useCallback, useMemo} from "react";
import Button from "./components/UI/Button/Button";
function App() {
  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);
  console.log("APP");
  const showHandler = () => {
    setShow((prev) => !prev);
  };
//   const demoHendler = ()=>{
// setLetShow(true)
//   }
const demoHendler = useCallback(() => {      // useCallback специальный встроенный хук.
    setLetShow(true);                       // Он дает знать React'y, что эту функцию не следует создавать при каждом рендеринге,
  },                                       //  а следует сохранить его у себя где-то в памяти. 
  []                                      //  И при обновлении компоненты вернешь нам эту же функцию
);                                       //  Работает только с функциями 

// const user = {
//   name: "Alina",
//   age:3
// }
const user = useMemo(()=>{ // Так же как и useCallback 
  return {                // Он дает знать React'y, что этот объект не следует создавать при каждом рендеринге,
    name: "Alina",       //  а следует сохранить его у себя где-то в памяти.
    age: 3,             // Работает только с объектами
  };
}, [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {show && <p>This is new</p>}

      <Button onClick={showHandler}> Click me</Button>
      <Demo onClick={demoHendler} user={user}/>
      <DemoList />
    </div>
  );
}

export default App;

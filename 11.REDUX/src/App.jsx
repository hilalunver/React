import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);

  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </div>
  );
}

export default App;

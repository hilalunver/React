import { useState } from "react";
import "./App.css";
import Hilal from "./Login";
import { users } from "./Login";

function App() {
  console.log(users);
  return (
    <div>
      <Hilal />
    </div>
  );
}

export default App;

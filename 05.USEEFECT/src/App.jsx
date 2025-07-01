import { use, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("ilk render edildiğinde çalışr");
  }, []);

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName değiştiğinde çalışır");
  }, [firstName]);

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastName değiştiğinde çalışır");
  }, [lastName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Hilal")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Ünver")}>Soyadı Değiştir</button>
      </div>
    </div>
  );
}

export default App;

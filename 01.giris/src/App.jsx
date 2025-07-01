import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let a = 15;
  const firstName = "Hilal";

  let vize1 = 60;
  let vize2 = 80;

  let sonuc = false;

  let isimler = ["Enes", "Hilal", "Adem", "Mustafa"];
  return (
    <div>
      {/* <p>Ortalama :{(vize1 + vize2) / 2}</p> */}
      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehiyeti alamazsın,kaybol</p>} */}
      {/* {(vize1 + vize2) / 2 >= 50 ? (
        <p>Dersten geçtin aferin</p>
      ) : (
        <p>kaldın geçmiş olsun</p>
      )} */}

      {isimler.map((isim, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  return (
    <div>
      <Container>
        <Product productName="Telefon" price={20500}/>
      </Container>
    </div>
    )
}

export default App;

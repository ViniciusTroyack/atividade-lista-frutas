import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { FruitList } from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits() {
    setFruits(fruits.filter((frutas) => frutas.color === "red"));
  }

  const totalPrice = fruits.reduce((acc, valor) => {
    return valor.price + acc;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div>Preço total: R$ {totalPrice}</div>
        <FruitList fruits={fruits} />
        <button onClick={filterRedFruits}>Filtrar Frutas Vermelas</button>
      </header>
    </div>
  );
}

export default App;

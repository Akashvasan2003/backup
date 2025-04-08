import React, { useState } from "react";
import Customer from "./components/Customer";
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";
import Shopkeeper from "./components/Shopkeeper";
import "./styles.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const placeOrder = (foodItem, ingredientsList) => {
    setOrders([...orders, { foodItem, ingredients: ingredientsList }]);
    setIngredients([...ingredients, ...ingredientsList]);
  };

  return (
    <div className="App">
      <h1>🍽️ Welcome to the Restaurant</h1>
      <Customer placeOrder={placeOrder} />
      <Waiter orders={orders} />
      <Shopkeeper ingredients={ingredients} />
      <Chef orders={orders} />
    </div>
  );
}

export default App;

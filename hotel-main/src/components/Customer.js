import React, { useState } from "react";

function Customer({ placeOrder }) {
  const [food, setFood] = useState("");
  const [ingredients, setIngredients] = useState("");

  return (
    <div className="customer">
      <h2>🧑‍💼 Customer</h2>
      <input
        type="text"
        placeholder="Enter food item"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={() => { 
        placeOrder(food, ingredients.split(",")); 
        setFood(""); 
        setIngredients(""); 
      }}>
        Order Food
      </button>
    </div>
  );
}

export default Customer;

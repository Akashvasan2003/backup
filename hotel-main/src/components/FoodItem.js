import React from "react";

function FoodItem({ name, ingredients }) {
  return <li>🍽️ {name} (Ingredients: {ingredients.join(", ")})</li>;
}

export default FoodItem;

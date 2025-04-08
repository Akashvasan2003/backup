import React from "react";

function Shopkeeper({ ingredients }) {
  return (
    <div className="shopkeeper">
      <h2>🛒 Shopkeeper</h2>
      {ingredients.length > 0 ? (
        <p>Supplying ingredients: {ingredients.join(", ")}</p>
      ) : (
        <p>No ingredients supplied yet.</p>
      )}
    </div>
  );
}

export default Shopkeeper;

import React from "react";

function Chef({ orders }) {
  return (
    <div className="chef">
      <h2>👨‍🍳 Chef</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>Preparing {order.foodItem} using {order.ingredients.join(", ")}</li>
          ))}
        </ul>
      ) : (
        <p>No food to prepare.</p>
      )}
    </div>
  );
}

export default Chef;

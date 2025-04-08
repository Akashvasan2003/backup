import React, { Component } from "react";
import FoodItem from "./FoodItem";

class Waiter extends Component {
  render() {
    return (
      <div className="waiter">
        <h2>👨‍🍳 Waiter</h2>
        {this.props.orders.length > 0 ? (
          <ul>
            {this.props.orders.map((order, index) => (
              <FoodItem key={index} name={order.foodItem} ingredients={order.ingredients} />
            ))}
          </ul>
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    );
  }
}

export default Waiter;

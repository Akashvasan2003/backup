"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transaction_1 = require("./transaction");
var cart = [
    { name: 'Laptop', price: 1000, quantity: 1, discount: 10 },
    { name: 'Phone', price: 500, quantity: 2, discount: 5 },
    { name: 'Headphones', price: 100, quantity: 3, discount: 15 }
];
var total = (0, transaction_1.calculateTotal)(cart);
console.log("The total price for the transaction is: $".concat(total.toFixed(2)));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer1 = new customer_1.Customer('John Doe', 'john.doe@example.com');
customer1.addPurchasedProduct('Laptop');
customer1.addPurchasedProduct('Smartphone');
console.log("".concat(customer1.name, " has purchased the following products:"));
console.log(customer1.listCustomerPurchases());

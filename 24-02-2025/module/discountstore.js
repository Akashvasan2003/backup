"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var discounts_1 = require("./discounts");
var store = new product_1.ProductStore();
var apple = new product_1.Product("Apple", 1.5, "Fruits");
var milk = new product_1.Product("Milk", 2.0, "Dairy");
var bread = new product_1.Product("Bread", 1.2, "Bakery");
store.addProduct(apple);
store.addProduct(milk);
store.addProduct(bread);
function displayProductWithDiscount(product) {
    var discountedPrice = discounts_1.Discounts.applyDiscount(product.price, product.category);
    console.log("".concat(product.name, " (").concat(product.category, ") - Original Price: $").concat(product.price.toFixed(2), " - Discounted Price: $").concat(discountedPrice.toFixed(2)));
}
store.listProducts();
store.products.forEach(displayProductWithDiscount);

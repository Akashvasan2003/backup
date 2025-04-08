"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventory_1 = require("./inventory"); // Import both Inventory and Product
var product1 = { id: 1, name: 'Laptop', price: 1000 };
var inventoryItem1 = new inventory_1.Inventory.InventoryItem(product1, 50);
console.log("Initial stock of ".concat(product1.name, ": ").concat(inventory_1.Inventory.checkStock(inventoryItem1)));
inventory_1.Inventory.addStock(inventoryItem1, 20);
console.log("Stock of ".concat(product1.name, " after adding 20 units: ").concat(inventory_1.Inventory.checkStock(inventoryItem1)));

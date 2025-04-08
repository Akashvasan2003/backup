
import { Inventory, Product } from './inventory';  // Import both Inventory and Product

const product1: Product = { id: 1, name: 'Laptop', price: 1000 };

const inventoryItem1 = new Inventory.InventoryItem(product1, 50);


console.log(`Initial stock of ${product1.name}: ${Inventory.checkStock(inventoryItem1)}`);


Inventory.addStock(inventoryItem1, 20);

console.log(`Stock of ${product1.name} after adding 20 units: ${Inventory.checkStock(inventoryItem1)}`);

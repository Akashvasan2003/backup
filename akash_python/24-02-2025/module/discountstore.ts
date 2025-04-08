

import { Product, ProductStore } from './product';
import { Discounts } from './discounts';


const store = new ProductStore();

const apple = new Product("Apple", 1.5, "Fruits");
const milk = new Product("Milk", 2.0, "Dairy");
const bread = new Product("Bread", 1.2, "Bakery");


store.addProduct(apple);
store.addProduct(milk);
store.addProduct(bread);


function displayProductWithDiscount(product: Product) {
  const discountedPrice = Discounts.applyDiscount(product.price, product.category);
  console.log(`${product.name} (${product.category}) - Original Price: ${product.price.toFixed(2)} - Discounted Price: $${discountedPrice.toFixed(2)}`);
}


store.listProducts();
store.products.forEach(displayProductWithDiscount);

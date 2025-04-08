import { calculateTotal, Product } from './transaction';

const cart: Product[] = [
  { name: 'Laptop', price: 1000, quantity: 1, discount: 10 },
  { name: 'Phone', price: 500, quantity: 2, discount: 5 },
  { name: 'Headphones', price: 100, quantity: 3, discount: 15 }
];

const total = calculateTotal(cart);

console.log(`The total price for the transaction is: $${total.toFixed(2)}`);

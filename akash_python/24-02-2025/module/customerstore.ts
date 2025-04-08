
import { Customer } from './customer';


const customer1 = new Customer('John Doe', 'john.doe@example.com');


customer1.addPurchasedProduct('Laptop');
customer1.addPurchasedProduct('Smartphone');

console.log(`${customer1.name} has purchased the following products:`);
console.log(customer1.listCustomerPurchases());

// transaction.ts

// Define a Product interface
export interface Product {
    name: string;
    price: number;
    quantity: number;
    discount: number; 
  }
  
  export function calculateTotal(products: Product[]): number {
    let total = 0;
  
    products.forEach(product => {
      
      const discountedPrice = product.price * (1 - product.discount / 100);
      
      
      total += discountedPrice * product.quantity;
    });
  
    return total;
  }
  
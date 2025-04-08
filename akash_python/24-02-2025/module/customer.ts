

export class Customer {
    name: string;
    email: string;
    purchasedProducts: string[];
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
      this.purchasedProducts = [];
    }
  
    
    addPurchasedProduct(product: string): void {
      this.purchasedProducts.push(product);
    }
  
    
    listCustomerPurchases(): string[] {
      return this.purchasedProducts;
    }
  }
  

  
  function discount(discountPercentage: number) {
    return function (target: any) {
      let originalTotalPrice = target.prototype.getTotalPrice;
  
      target.prototype.getTotalPrice = function () {
        const totalPrice = originalTotalPrice.call(this);
        const discountAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountAmount;
      };
    };
  }
  
 
  @discount(10)  
  export class Customer {
    name: string;
    email: string;
    purchasedProducts: { product: string, price: number }[];
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
      this.purchasedProducts = [];
    }
  
    addPurchasedProduct(product: string, price: number): void {
      this.purchasedProducts.push({ product, price });
    }
  
    listCustomerPurchases(): string[] {
      return this.purchasedProducts.map(p => p.product);
    }
  
   
    getTotalPrice(): number {
      return this.purchasedProducts.reduce((total, product) => total + product.price, 0);
    }
  }
  
 
  const customer = new Customer("John Doe", "john@example.com");
  customer.addPurchasedProduct("Laptop", 1000);
  customer.addPurchasedProduct("Phone", 500);
  
  console.log("Total Price (after discount):", customer.getTotalPrice()); 
  console.log("Purchased Products:", customer.listCustomerPurchases());
  console.log("inventory project",customer.listCustomerPurchases());
  
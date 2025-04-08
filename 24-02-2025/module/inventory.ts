
export type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  export namespace Inventory {
 
    export class InventoryItem {
      product: Product;
      stockQuantity: number;
  
      constructor(product: Product, stockQuantity: number) {
        this.product = product;
        this.stockQuantity = stockQuantity;
      }
    }
  
  
    export function addStock(item: InventoryItem, quantity: number): void {
      item.stockQuantity += quantity;
      console.log(`${quantity} units added to ${item.product.name}. New stock: ${item.stockQuantity}`);
    }
  
 
    export function checkStock(item: InventoryItem): number {
      return item.stockQuantity;
    }
  }
  
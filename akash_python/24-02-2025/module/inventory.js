"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory;
(function (Inventory) {
    var InventoryItem = /** @class */ (function () {
        function InventoryItem(product, stockQuantity) {
            this.product = product;
            this.stockQuantity = stockQuantity;
        }
        return InventoryItem;
    }());
    Inventory.InventoryItem = InventoryItem;
    function addStock(item, quantity) {
        item.stockQuantity += quantity;
        console.log("".concat(quantity, " units added to ").concat(item.product.name, ". New stock: ").concat(item.stockQuantity));
    }
    Inventory.addStock = addStock;
    function checkStock(item) {
        return item.stockQuantity;
    }
    Inventory.checkStock = checkStock;
})(Inventory || (exports.Inventory = Inventory = {}));

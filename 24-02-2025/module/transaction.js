"use strict";
// transaction.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
function calculateTotal(products) {
    var total = 0;
    products.forEach(function (product) {
        var discountedPrice = product.price * (1 - product.discount / 100);
        total += discountedPrice * product.quantity;
    });
    return total;
}

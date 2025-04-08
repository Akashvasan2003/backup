"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name, email) {
        this.name = name;
        this.email = email;
        this.purchasedProducts = [];
    }
    Customer.prototype.addPurchasedProduct = function (product) {
        this.purchasedProducts.push(product);
    };
    Customer.prototype.listCustomerPurchases = function () {
        return this.purchasedProducts;
    };
    return Customer;
}());
exports.Customer = Customer;

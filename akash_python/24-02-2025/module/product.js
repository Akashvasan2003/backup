"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStore = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Product;
}());
exports.Product = Product;
var ProductStore = /** @class */ (function () {
    function ProductStore() {
        this.products = [];
    }
    ProductStore.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductStore.prototype.listProducts = function () {
        if (this.products.length === 0) {
            console.log("No products available.");
            return;
        }
        console.log("Products in Store:");
        this.products.forEach(function (product, index) {
            console.log("".concat(index + 1, ". ").concat(product.name, " - ").concat(product.category, " - ").concat(product.price));
        });
    };
    return ProductStore;
}());
exports.ProductStore = ProductStore;

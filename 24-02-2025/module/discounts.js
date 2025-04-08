"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discounts = void 0;
var Discounts;
(function (Discounts) {
    function calculateDiscount(category) {
        switch (category) {
            case "Fruits":
                return 0.10;
            case "Dairy":
                return 0.05;
            case "Bakery":
                return 0.07;
            default:
                return 0;
        }
    }
    Discounts.calculateDiscount = calculateDiscount;
    function applyDiscount(price, category) {
        var discount = calculateDiscount(category);
        var discountedPrice = price - (price * discount);
        return discountedPrice;
    }
    Discounts.applyDiscount = applyDiscount;
    function formatPrice(price) {
        return price.toFixed(2);
    }
    Discounts.formatPrice = formatPrice;
})(Discounts || (exports.Discounts = Discounts = {}));

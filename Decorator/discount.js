"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discounts = void 0;
var Discounts;
(function (Discounts) {
    function formatPriceBeforeDiscount(target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (price, category) {
            var formattedPrice = price.toFixed(2);
            console.log("Formatted price before discount: $".concat(formattedPrice));
            return originalMethod.apply(this, [parseFloat(formattedPrice), category]);
        };
        return descriptor;
    }
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
    function applyDiscount(_a) {
        var price = _a.price, category = _a.category;
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

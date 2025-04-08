"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
function logClass(target) {
    console.log("Class created: ".concat(target.name));
}
function discount(discountPercentage) {
    return function (target) {
        var originalTotalPrice = target.prototype.getTotalPrice;
        target.prototype.getTotalPrice = function () {
            var totalPrice = originalTotalPrice.call(this);
            var discountAmount = totalPrice * (discountPercentage / 100);
            return totalPrice - discountAmount;
        };
    };
}
var Customer = function () {
    var _classDecorators = [logClass, discount(10)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Customer = _classThis = /** @class */ (function () {
        function Customer_1(name, email) {
            this.name = name;
            this.email = email;
            this.purchasedProducts = [];
        }
        Customer_1.prototype.addPurchasedProduct = function (product, price) {
            this.purchasedProducts.push({ product: product, price: price });
        };
        Customer_1.prototype.listCustomerPurchases = function () {
            return this.purchasedProducts.map(function (p) { return p.product; });
        };
        Customer_1.prototype.getTotalPrice = function () {
            return this.purchasedProducts.reduce(function (total, product) { return total + product.price; }, 0);
        };
        return Customer_1;
    }());
    __setFunctionName(_classThis, "Customer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Customer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Customer = _classThis;
}();
exports.Customer = Customer;
var customer = new Customer("John Doe", "john@example.com");
customer.addPurchasedProduct("Laptop", 1000);
customer.addPurchasedProduct("Phone", 500);
console.log("Total Price (after discount):", customer.getTotalPrice());
console.log("Purchased Products:", customer.listCustomerPurchases());

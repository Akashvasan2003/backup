var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function processNumbers(numbers) {
    if (numbers.length === 0) {
        return { sum: 0, difference: 0, ascending: [], descending: [] };
    }
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    var difference = numbers.length >= 4 ? (numbers[0] - numbers[1]) + (numbers[2] - numbers[3]) : 0;
    var ascending = __spreadArray([], numbers, true).sort(function (a, b) { return a - b; });
    var descending = __spreadArray([], numbers, true).sort(function (a, b) { return b - a; });
    return { sum: sum, difference: difference, ascending: ascending, descending: descending };
}
var result = processNumbers([5, 9, 3, 8, 2]);
console.log(result);

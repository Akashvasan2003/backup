function toUpperCaseArray(strings) {
    return strings.map(function (str) { return str.toUpperCase(); });
}
var inputArray = ["hello", "world", "typescript"];
var uppercasedArray = toUpperCaseArray(inputArray);
console.log(uppercasedArray);

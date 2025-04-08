function convertToUpperCase(arr) {
    return arr.map(function (str) { return str.toUpperCase(); });
}
var strings = ['hello', 'world', 'typescript', 'rocks'];
var upperCaseStrings = convertToUpperCase(strings);
console.log(upperCaseStrings);

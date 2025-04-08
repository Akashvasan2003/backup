function processNumbers(numbers: number[]): { sum: number; difference: number; ascending: number[]; descending: number[] } {
    if (numbers.length === 0) {
        return { sum: 0, difference: 0, ascending: [], descending: [] };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const difference = numbers.length >= 4 ? (numbers[0] - numbers[1]) + (numbers[2] - numbers[3]) : 0;
    const ascending = [...numbers].sort((a, b) => a - b);
    const descending = [...numbers].sort((a, b) => b - a);

    return { sum, difference, ascending, descending };
}

const result = processNumbers([5, 9, 3, 8, 2]);
console.log(result);



let numbers = [10, 20, 4, 45, 99, 99];

let first = -Infinity, second = -Infinity;

for (let num of numbers) {
    if (num > first) {
        second = first;
        first = num;
    } else if (num > second && num < first) {
        second = num;
    }
}

console.log("Second Largest Number:", second);

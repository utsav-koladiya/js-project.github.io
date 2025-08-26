let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let merged = [];

for (let num of arr1) {
    if (!merged.includes(num)) {
        merged.push(num);
    }
}

for (let num of arr2) {
    if (!merged.includes(num)) {
        merged.push(num);
    }
}

console.log("Merged Unique Array:", merged);

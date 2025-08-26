let arr = [0, "hello", false, 42, "", null, "world", undefined, NaN, true];

let cleaned = [];

for (let item of arr) {
    if (item) {   
        cleaned.push(item);
    }
}

console.log("Cleaned Array:", cleaned);

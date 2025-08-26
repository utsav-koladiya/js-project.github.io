let numbers = [12, 7, 5, 64, 23, 90, 11, 2];

let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);  
  } else {
    odd.push(numbers[i]);  
  }
}

console.log("Even Numbers:", even);
console.log("Odd Numbers:", odd);
let fruits = ["apple", "mango", "apple", "orange", "mango", "apple"];

let frequency = {};

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  
  if (frequency[fruit]) {
    frequency[fruit]++;  
  } else {
    frequency[fruit] = 1;  
  }
}


for (let key in frequency) {
  console.log(key + " = " + frequency[key]);
}
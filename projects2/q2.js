let arr = [45, 12, 78, 34, 90, 11]

let min = arr[0]
let max = arr[0]

for(let i = 0 ; i<arr.length ; i++)
{
    if ( arr[i] > max){
        max =arr[i];
    }
    else if (arr[i] < min ){
        min =arr[i];
        }
}

console.log(max)
console.log(min);


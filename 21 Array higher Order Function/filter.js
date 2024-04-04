/*      Filter Function    (return the sub array) */

const numbers = [
	59, 45, 93, 456, 25, 5, 64, 5, 8, 4, 58, 5, 5, 5, 545, 4, 5, 45, 45, 54,
];



let greater_50 = numbers.filter((num)=>{
    return num >= 50 ; // ture false decusion
})
console.log(greater_50);

console.log(numbers);



let even = numbers.filter((num)=>{
    return num%2 === 0 ; // ture false decusion
})
console.log(even);

console.log(numbers);
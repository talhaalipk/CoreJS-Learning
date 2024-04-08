const arr1 = [52, 54, 65, 6, 4854, 64, 5];
const arr2 = ["talha", "ali", "tariq"];

//Problem

// arr1.push(arr2); //Array with in array
// console.log(arr1); // [ 52, 54, 65, 6, 4854, 64, 5, [ 'talha', 'ali', 'tariq' ] ]



//Solution (Spread  operator)

arr1.push(...arr2);
console.log(arr1); // [52, 54, 65, 6, 4854, 64, 5, "talha", "ali", "tariq"] 





/*  *Objects */

const obj1 = {
    name : 'talha',
    class : 'bsse'
}

const obj2 = {
    fee : 25000,
    dapartment : 'Software Eng.'
}

const both = {...obj1 , ...obj2}

console.log(both);

let value = 40 > 35 ? 'talha' : 'other' ;

console.log(typeof value); // string
console.log(value); // talha


let value2 = 40 > 100 ? 'talha' : 'other' ;

console.log(typeof value2); // string
console.log(value2); // other


/* Nested ternary Operator */

let testValue = 3;

let a = testValue == 1 ? 'One' : testValue == 2 ? "Two" : "three" ;

console.log(a);

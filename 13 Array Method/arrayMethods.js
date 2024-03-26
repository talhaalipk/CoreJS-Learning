/*      SHIFT()       */
/*      SHIFT()       */
/*      SHIFT()       */

let array = ['talha' , 'moiz' , 'salman' , 'waleed' ,'ayyan']

console.log(array); // [ 'talha', 'moiz', 'salman', 'waleed', 'ayyan' ]
console.log(array.shift()); // talha
console.log(array); // [ 'moiz', 'salman', 'waleed', 'ayyan' ]

/*      UNSHIFT()       */
/*      UNSHIFT()       */
/*      UNSHIFT()       */

let names = ['talha' , 'moiz' , 'salman' , 'waleed' ,'ayyan']

console.log(names); // [ 'talha', 'moiz', 'salman', 'waleed', 'ayyan' ]
console.log(names.unshift('Zuhaab')); // 6
console.log(names); // [ 'Zuhaab', 'talha', 'moiz', 'salman', 'waleed', 'ayyan' ]

/*      concat()       */
/*      concat()       */
/*      concat()       */

let org = [154 ,8545 ,656];
let array2 = ['talha' ,'ayyan'];

console.log(org); // [ 154, 8545, 656 ]
console.log(array2); // [ 'talha', 'ayyan' ]

console.log(org.concat(array2)); //[ 154, 8545, 656, 'talha', 'ayyan' ]

console.log(org); // [ 154, 8545, 656 ]
console.log(array2); // [ 'talha', 'ayyan' ]


/*      reverse()       */
/*      reverse()       */
/*      reverse()       */

let numArray = [ 5 ,10 ,15, 20, 25];

console.log(numArray); // [ 5, 10, 15, 20, 25 ]
console.log(numArray.reverse(numArray)); //  [ 25, 20, 15, 10, 5 ]
console.log(numArray); // [ 25, 20, 15, 10, 5 ]

/*      SORT()       */
/*      SORT()       */
/*      SORT()       */

let sortArray = [ 'talha' , 'moiz' , 'salman' , 'waleed' ,'ayyan' ];

console.log(sortArray); // [ 'talha', 'moiz', 'salman', 'waleed', 'ayyan' ]
console.log(sortArray.reverse(sortArray)); //  [ 'ayyan', 'waleed', 'salman', 'moiz', 'talha' ]
console.log(sortArray); // [ 'ayyan', 'waleed', 'salman', 'moiz', 'talha' ]


/*      Slice()       */
/*      Slice()       */
/*      Slice()       */

let sliceArray = [ 'talha' , 'moiz' , 'salman' , 'waleed' ,'ayyan' ];

console.log(sliceArray); // [ 'talha', 'moiz', 'salman', 'waleed', 'ayyan' ]
console.log(sliceArray.slice(1,3)); // [ 'moiz', 'salman' ]
console.log(sliceArray); // [ 'ayyan', 'waleed', 'salman', 'moiz', 'talha' ]

/*      Splice()       */
/*      Splice()       */
/*      Splice()       */

let spliceArray = [ 'talha' , 'moiz' , 'salman' , 'waleed' ,'ayyan' ];

console.log(spliceArray); // [ 'talha', 'moiz', 'salman', 'waleed', 'ayyan' ]
console.log(spliceArray.splice(1,3)); // [ 'moiz', 'salman', 'waleed' ]
console.log(spliceArray); // [ 'talha', 'ayyan' ]
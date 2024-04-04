/* Agar koi ak be ture hova to return value true ho ge */

let myArray = [95,45,54,5,65,6,6,546,46,64,66,4556,0]

let is_0_inArray = myArray.some((num)=> num === 0) ;
console.log(is_0_inArray);

let is_even_inArray = myArray.some((num)=> (num % 2 === 8)) ;
console.log(is_even_inArray);
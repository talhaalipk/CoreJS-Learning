let arrayNames = ['talha', 'moiz', 'waleed', 'waseem'];

console.log(arrayNames); // [ 'talha', 'moiz', 'waleed', 'waseem' ]

/* ===========TYPE OF ARRAY============= */
/* ===========TYPE OF ARRAY============= */

console.log(typeof arrayNames); // object

/* ===========ADDING VALUES IN  OF ARRAY============= */
/* ===========ADDING VALUES IN  OF ARRAY============= */

arrayNames.push('Salman');
console.log(arrayNames);


/* ===========ADDING VALUES IN  OF ARRAY============= */
/* ===========ADDING VALUES IN  OF ARRAY============= */

console.log(arrayNames.length); // 5

arrayNames[500] = 'Zuhaab';

console.log(arrayNames.length); // 501
console.log(arrayNames); //['talha','moiz','waleed','waseem','Salman',<495 empty items>,'Zuhaab']
console.log(arrayNames[50]); // undefined


//  FUNCTIONS
//  FUNCTIONS


// .push() --> Return new lenght
// .pop() --> Return last value
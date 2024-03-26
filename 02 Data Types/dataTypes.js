/*
    2 TYPES OF DATA TYPES

    --> primitive data types
    --> non - primitive data types

            primitive data types
            primitive data types
                
                Number --> NaN is all number vallue  NaN != NaN
                String
                Boolean
                Null
                Undefined --> when variable is create but donot have any value (let a);
*/


/* ---------------Number---------------- */

console.log(typeof (569)); //Output : number


/* ---------------String---------------- */

/*
    ways to write string

        1) using ''
        2) using ""
        2) using ``
*/

console.log(typeof "String") //Output : String
console.log(typeof 'String') //Output : String
console.log(typeof `String`) //Output : String


        // Convertion of String to number using +

console.log(typeof (+"-59")); //Output : number
console.log(typeof (-"-59"));  //Output : number
        
        // NaN --> name  // NaN is not datatype byt the value in varible is NaN
        //NaN === NaN; // false
        // Number.NaN === NaN; // false
        // isNaN(NaN); // true
        // isNaN(Number.NaN); // true
        // Number.isNaN(NaN); // true

console.log(typeof (+"erjgnv")); //Output : number
let a = +"erjgnv";
console.log(a);  //Output : NaN 

    
/* ---------------Boolean---------------- */

console.log(typeof true); //Output : boolean
console.log(typeof false); //Output : boolean
console.log(typeof 1); //Output : number
console.log(typeof 0); //Output : number

/* ---------------undefined---------------- */
let g;

console.log(typeof g); //Output : undefined

function gello()
{
    let g;
    console.log(g); //Output : undefined
}

gello();


/* --------------- Null ---------------- */
let n = null;

console.log(typeof n); //Output : object

function hello()
{
    let n = null;
    console.log(n); //Output : null
}

hello();




/*  Convertion of underfined and null in  Number*/

let aa = +null;
let bb = +undefined;
console.log(typeof aa); // Number
console.log(aa); // 0
console.log(typeof bb); // Number
console.log(bb); // NaN
let Name="talha";

console.log(Name[0]); // output : t
console.log(Name[1]); // output : a
console.log(Name[55]); // output : undefined

//Proporty
    // .length


console.log(Name.length); // output : 5

let s = "123456789";
console.log(s.length); // output : 9


//Functions

/* ----------- Methods (Without Argument )--------------- */

    /* toUpperCase() */

let string = "king get post";
console.log(string.toUpperCase()); // output : KING GET POST

    /* toUpperCase() */

let stringOne = "KING GET POST";
console.log(stringOne.toLowerCase()); // output : king get post
    

    /* trim() */

let trim = "   dnj   dfgn jgnf       ";
console.log(trim); // output :    dnj   dfgn jgnf
console.log(trim.trim()); // output : dnj   dfgn jgnf


    /* trimStart() */

console.log(trim.trimStart()); // output : dnj   dfgn jgnf     

    /* trimEnd() */

console.log(trim.trimEnd()); // output :     dnj   dfgn jgnf



/* ----------- Methods (With Argument )--------------- */

    // includes() 

let testString = "hello g How are you" ;

console.log(testString.includes("hello")); //ture 
console.log(testString.includes("jello")); // false
console.log(testString.includes("Hello")); // false


    // indexOf() 

console.log(testString.indexOf("How")); // 8
console.log(testString.indexOf("how")); // -1

    //replace()
console.log(testString.replace('How' , 'When')); //hello g When are you
console.log(testString.replace('w' , 'P')); //hello g HoP are you

    //replaceAll()
console.log(testString.replaceAll('o','X')); //hellX g HXw are yXu

    //padStart()
console.log(testString.padStart(25 , '...'));  //......hello g How are you


    //padStart()
console.log(testString.padEnd(25 , '...')); // hello g How are you......

    //split()
console.log(testString.split(' ')); // --> return array [ 'hello', 'g', 'How', 'are', 'you' ]
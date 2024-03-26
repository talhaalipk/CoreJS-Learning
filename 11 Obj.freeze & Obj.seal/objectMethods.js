/*--------- Object Equality -------------- */

// In object case == and === conpare the address of both objects and return value accordingly

let person1 = {
    name : 'talha' ,
    age : 18 ,
    gender : 'M'
}

let person2 = {
    name : 'talha' ,
    age : 18 ,
    gender : 'M'
}

console.log( person1 == person2); // false
console.log( person1 === person2); // false


// Bolding sane address
let person3 = person2 ;

console.log( person2 == person2); // ture
console.log( person2 === person2); // ture


/*--------- cost Object Update -------------- */

// for object we can change the values of key and add new key in obj  created by const
// thes iss because car address do not change
const car = {
    model : 59,
    name : 'alto',
}

console.log(car); //{ model: 59, name: 'alto' }
car.name = 'corala';
console.log(car); // { model: 59, name: 'corala' } name update

car.key = "automatic";
console.log(car); // { model: 59, name: 'corala', key: 'automatic' } new key added


// Here we assign new address to object
// car = {} // error



/*==================== object.seal() ===========================*/

/*
    in object .seal function we can not add AND delete any key of object
    but we can update the values of existing key
*/

let school = {
    name : "LGS",
    location : 'GT Road'
}

console.log(school); // { name: 'LGS', location: 'GT Road' }
Object.seal(school);
school.Room = 45 ;
delete school.location ;
school.name = "BTS" ;

// Note: Above two commands donot work  because we seal the object but name updated
console.log(school); // { name: 'BTS', location: 'GT Road' }



/*==================== object.freeze() ===========================*/

/*
    in object .freeze() function we can not add AND delete any key of object
    and  we cannot update the values of existing key
*/

let school_two = {
    name : "LGS",
    location : 'GT Road'
}

console.log(school_two); // { name: 'LGS', location: 'GT Road' }
Object.freeze(school_two);
school_two.Room = 45 ;
delete school_two.location ;
school_two.name = "BTS" ;

// Note: Above tree  commands donot work  because we freeze the object 
// Note: name as so donot updates 
console.log(school_two); // { name: 'LGS', location: 'GT Road' }



/* =======================In Keyword ============================ */
// The in operator returns true if the specified property is in the specified object or its prototype chain.

let school_three = {
    name : "LGS",
    location : 'GT Road'
}

console.log('name' in school_three); // ture
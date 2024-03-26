/*
    CREATION OF OBJECT


    in objects string on left side --> key
    And string on right side --> value
*/

let obj = {
    name : 'talha',
    age : 18,
    address : 'Pakistan' 
}


/*
    "Access the values of key"

    Using dot . notation
*/

console.log(obj.name); // talha


/*
    "creating and Access the values of key"
    
    Using Brackets Notation
*/

// why needed
let person = {
    gender : 'male',
    // first-name : 'talha' , //Error
    ['first-name'] :'talha'
}

// console.log( person.first-name );  // error
console.log(person["first-name"]); //taha


/*
    "Adding New key in existing Object"
*/

console.log(person); //{ gender: 'male', 'first-name': 'talha' }

person['last-name'] = 'ali' ; //add new key last-name

console.log(person); //{ gender: 'male', 'first-name': 'talha', 'last-name': 'ali' }


/*
    "deleting key in existing Object"
*/

console.log(person);  // { gender: 'male', 'first-name': 'talha', 'last-name': 'ali' }
delete person["first-name"];
console.log(person); // { gender: 'male', 'last-name': 'ali' }

/*
    OBJECTS WITH IN OBJECTS
    OBJECTS WITH IN OBJECTS
    OBJECTS WITH IN OBJECTS
*/

let student = {
    name : 'Talha Ali',
    age : 18,
    class : 'Bs',
    address : {
        country : "pakistan",
        city : 'lahore',
        area : {
            street : 5,
            colony : 'SS' 
        }
    }
}

console.log(student.address.country); // pakistan
console.log(student.address.city); // lahore
console.log(student.address.area.street); // 5
console.log(student.address.area.colony); //SS
/* 
    * FOR Array  
*/

const fruits = ["apple", "banana", "orange", "kiwi", 'mango', 'grapes'];
const numbers = [10, 20, 30, 40, 50];

let [a1 , a2 , a3] = fruits;

console.log(a1);
console.log(a2);
console.log(a3);
console.log();

let [,, third] = fruits;

console.log(third);
console.log();


let {0:first , 5:last} = fruits;
console.log(first);
console.log(last);
console.log();





/* 
    * FOR Objects  
*/


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};


let {firstName,age} = person;
console.log(firstName + '\t' + age);
console.log();

let {firstName:objName,age:objAge} = person;
console.log(objName + '\t' + objAge);
console.log();

// --> Now level 2
let {address:{city:objCity}} = person;

console.log(objCity);
console.log();

let {hobbies:{1:objHobi1}} = person;

console.log(objHobi1);
console.log();
/*          COPY PROBLEM 0 level SHALOW COOPY        */
/*          COPY PROBLEM 0 level SHALOW COOPY        */
/*          COPY PROBLEM 0 level SHALOW COOPY        */

        //FOR ARRAY
let array = [1,2,3,4,5];
let copyArray = array;

console.log(array); // [ 1, 2, 3, 4, 5 ]
console.log(copyArray); // [ 1, 2, 3, 4, 5 ]

array.push(89);
array.push(899);

//BOTH WILL UPDATE
console.log(array); // [1,  2,   3, 4,5, 89, 899 ]
console.log(copyArray); // [1,  2,   3, 4,5, 89, 899 ]


        //FOR Objects
let obj = {
    name : 'talha',
    age : 18
}

let CopyObj = obj ;

console.log(obj); // { name: 'talha', age: 18 }
console.log(CopyObj); // { name: 'talha', age: 18 }

delete CopyObj.age;

// Update In both
console.log(obj); // { name: 'talha' }
console.log(CopyObj); // { name: 'talha' }




/*          COPY PROBLEM 1 level SHALOW COOPY        */
/*          COPY PROBLEM 1 level SHALOW COOPY        */
/*          COPY PROBLEM 1 level SHALOW COOPY        */


        //FOR ARRAY
let array1 = [1,2,3,4,5];
let copyArray1 = [...array1];

console.log(array1); // [ 1, 2, 3, 4, 5 ]
console.log(copyArray1); // [ 1, 2, 3, 4, 5 ]

array1.push(89);
array1.push(899);

// ONly array1 donot update
console.log(array1); // [1,  2,   3, 4,5, 89, 899 ]
console.log(copyArray1); // [1,  2,   3, 4,5]

console.log("54444444444484555555555555555");
        //FOR Objects
let obj1 = {
    name : 'talha',
    age : 18
}

let CopyObj1 = {...obj1} ;

console.log(obj1); // { name: 'talha', age: 18 }
console.log(CopyObj1); // { name: 'talha', age: 18 }

delete CopyObj1.age;

// only copyobj update
console.log(obj1); // { name: 'talha', age: 18 }
console.log(CopyObj1); // { name: 'talha' }


/*====================NOW AGAIN THE PROBLEM COMES=========================== */
/*====================NOW AGAIN THE PROBLEM COMES=========================== */
/*====================NOW AGAIN THE PROBLEM COMES=========================== */
/*====================NOW AGAIN THE PROBLEM COMES=========================== */
/*====================NOW AGAIN THE PROBLEM COMES=========================== */

let object = {
    name : 'talha',
    age: 18,
    address: {
        city : 'lahore',
        street : "50 k"
    }
}

let copyObject = {};

Object.assign(copyObject , object);

console.log(object); // { name: 'talha', age: 18, address: { city: 'lahore', street: '50 k' } }
console.log(copyObject); // { name: 'talha', age: 18, address: { city: 'lahore', street: '50 k' } }

object.address.city = 'Krachi';

// Both Change
console.log(object); // { name: 'talha', age: 18, address: { city: 'Krachi', street: '50 k' } }
console.log(copyObject); // { name: 'talha', age: 18, address: { city: 'Krachi', street: '50 k' } }
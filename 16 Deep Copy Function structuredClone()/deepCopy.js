let object = {
    name : 'talha',
    age: 18,
    address: {
        city : 'lahore',
        street : "50 k"
    }
}

let copyObject = structuredClone(object);

console.log(object); // { name: 'talha', age: 18, address: { city: 'lahore', street: '50 k' } }
console.log(copyObject); // { name: 'talha', age: 18, address: { city: 'lahore', street: '50 k' } }

object.address.city = "Sailkot";
console.log(object); // { name: 'talha', age: 18, address: { city: 'Sailkot', street: '50 k' } }
console.log(copyObject); // { name: 'talha', age: 18, address: { city: 'lahore', street: '50 k' } }
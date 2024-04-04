/*      reduce Function     */

const marks = [1, 1, 1, 1, 2, 15, 1, 3];

let sum = marks.reduce((acc , num)=> acc+num, 0);

console.log(sum);

let noOfeven = marks.reduce((acc , num)=> {
    if(!(num % 2 === 0))
    {
        return ++acc;
    }
    return acc;
}, 0);

console.log(noOfeven);
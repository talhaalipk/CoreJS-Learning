// *     Function Types       *//



// Simple Function
function simpleFunction()
{
    console.log("Inside Simple Function");
}
simpleFunction();

//  Arrow Function
let arrowFunction = () => {
    console.log("Inside Arrow Function");
}
arrowFunction();

// Function Declaration + Definition
function addNum(a, b) {
    return a + b;
}
console.log(addNum(2,9));

// Function Expression + Definition
let addingTwoValues = function(a, b) {
    return a + b;
};
console.log(addingTwoValues(5,9));

// IIFE stands for Immediately Invoked Function Expression
(function abc() {
    console.log('dgjhj');
})();

(() => {
    console.log('aa gya');
})();

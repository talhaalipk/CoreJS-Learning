/*      Map Function     */

const marks = [59, 45, 545, 4, 5, 45, 45, 54];

let newArray = marks.map((val , index , array)=>{
    console.log('value : ' + val + ' ,\t index : ' + index + ' ,\t Array : ' + array );

    return val;
})

console.log(newArray);

                /*      Pratice Questions       */
                /*      Pratice Questions       */
                /*      Pratice Questions       */
                /*      Pratice Questions       */

// add 10 in every element of Array


let add10Array = marks.map((marks)=> marks+10) ;

console.log(add10Array);


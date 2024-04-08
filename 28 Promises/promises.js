/*
    * Promises in Js

        * --> Basiclly it is a (special) object
        * --> Promises is a function
        * --> we create it using new keyword

*/

const promiseObj = new Promise((resolve , reject, a = 10)=>{
    setTimeout(()=>{
        if(a === 10)
        {
            resolve('ma chal gya'); // state == fullfiled
        }
        else{
            reject('ma error dana laga '); // state == rejected
        }
    },3000);
});

/*
    * --->  .then() function call when state will come or change to fullfill
    * --->  .catch() function call when state will come or change to rejectes
    * --->  .finally() function call for both states fullfill and reject
*/

promiseObj.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Fullfill ho gya');
});


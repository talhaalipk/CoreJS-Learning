/* this all is Dom manopulation on page Url : https://en.wikipedia.org/wiki/Brendan_Eich */


document.getElementById("idName");

// return the Complete tag  --> <h1 id="firstHeading" class="firstHeading mw-first-heading"><span class="mw-page-title-main">Brendan Eich</span></h1>

let heading = document.getElementById('firstHeading');

// we can also store it in to a variable 

console.log(heading);

// output --> <h1 id="firstHeading" class="firstHeading mw-first-heading"><span class="mw-page-title-main">Brendan Eich</span></h1>

console.log(heading.id);

// return the tag id name 
// Output -->'firstHeading'

console.log(heading.className);

// return the tag class name 
// Output -->'firstHeading mw-first-heading'


heading.setAttribute('id','newId'); 
console.log(heading.id);

// Keep in mind it will always over-write the value and remove previous value
// Output --> newId

heading.style.color = 'green'

// change the color of text












/*
    document.getElementById("firstHeading");
    <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
    let heading = document.getElementById("firstHeading");
    undefined
    heading
    <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
    heading.id
    'firstHeading'
    heading.className
    'firstHeading mw-first-heading'
    heading.set
    undefined
    heading.setAttribute('id','newId')
    undefined
    heading.id
    'newId'
    heading.sty
    undefined
    heading.style.color = 'green'
    'green'
*/
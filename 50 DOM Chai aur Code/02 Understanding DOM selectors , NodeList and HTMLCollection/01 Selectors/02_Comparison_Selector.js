/* Practical --> id_comrison.png */


document.getElementById("idName");

// return the Complete tag  --> <h1 id="firstHeading" class="firstHeading mw-first-heading"><span class="mw-page-title-main">Brendan Eich</span></h1>

document.getElementsByClassName('firstHeading ')

// Note ==> it will always return HTMLCollection not array or single tag

document.querySelector('.heading'); // for class
document.querySelector('#heading'); // for id
document.querySelector('h1'); // for tag

// Note ==> it will always return the first (only one) tag in tag format

document.querySelectorAll('.heading');
document.querySelectorAll('#heading');
document.querySelectorAll('h1');

// Note ==> it will always return all the tag on web page in "NODEList form"     



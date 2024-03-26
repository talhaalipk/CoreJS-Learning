const list_parent = document.querySelector('ol');
console.log(list_parent);

// creating element 
function createElement(value)
{
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(`${value}`));

    return newItem;
}

//adding element

//      At End
function addElementAtEnd(parent)
{
    parent.appendChild(createElement('Golang'));
}

addElementAtEnd(list_parent);

//      At Start
function addElementAtStart(parent)
{
    parent.prepend(createElement('Rust'));
}

addElementAtStart(list_parent);
addElementAtStart(list_parent);


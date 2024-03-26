const listParent = document.querySelector("ol");

//edit value
function editElement(parent, childNumber, newValue) {
  const target = parent.querySelector(`:nth-child(${childNumber})`);
  console.log(target);
  target.innerHTML = newValue;
}

editElement(listParent, 2, "hellog");

const rem = listParent.querySelector(":nth-child(2)");
function removeElement(element) {
  // console.log(element.parentNode);
  element.parentNode.removeChild(element);
}

removeElement(rem);

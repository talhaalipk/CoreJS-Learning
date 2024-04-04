function unlimitedAddition() {
	// accept no parameter
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;
}

console.log(unlimitedAddition(2, 8, 6, 4));
console.log(unlimitedAddition(2, 8, 6, 4, 95));
console.log(unlimitedAddition(2, 8, 6, 4, 5));
console.log(unlimitedAddition(2, 8, 6, 4, 963));
console.log(unlimitedAddition(2, 8, 6, 4, 465, 54, 486, 4, 685, 465, 4, 4));
console.log(
	unlimitedAddition(2, 8, 6, 4, 465, 54, 486, 4, 685, 465, 4, 4, 100)
);

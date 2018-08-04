let numbers = [];

for (let i=0; i<=100000; i++) {
	if (i % 6 == 0 ) {
		numbers.push(i);
	}
}
document.body.innerHTML = numbers;
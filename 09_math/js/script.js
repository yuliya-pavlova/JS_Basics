/*function moduleSquare(num) {
	return Math.abs(num)/2;
}

console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.678)); // отбрасывает все, что после запятой

console.log(Math.round(2.300)); //округляет по мат. правилам
console.log(Math.round(2.800));

console.log(Math.random());


console.log(Math.floor(Math.random()*(10 - 5) + 5);*/

function makeA(num) {
	a = num**Math.floor(Math.random()*(10 - 1) + 1);
	return Math.abs(a);
}
console.log(makeA(2));
let myText = (element, text) => element.innerHTML = text;

myText(document.body, 'Hi!');

function haveEnough(money, howManyApple, howManyBread, oneApple, oneBread) {

	all_apple = howManyApple * oneApple;
	all_bread = howManyBread * oneBread;
	sum = all_bread + all_apple;
	(money >= sum)? console.log('Вам хватает денег на покупки') : console.log('Вам не хватает денег');
}

haveEnough(1000, 5, 5, 10, 10);
console.log('You are at ' + window.location);

let people = ['Iren', 'Mari', 'Juli'];
people[0] = 'Petya';
//console.log(people);
//console.log(people.length);

/*let bigArray = [
	[1,2,3],
	[true,false],
	['a', 'b', 'c']
]
console.log(bigArray[2][2]);

let bigObject = {
	names : ['Iren', 'Mari', 'Juli'],
	grades : [
	{
		intern : 1,
		junior : 2
	},
	{
		middle : 3,
		senior : 2
	}

	]
}

console.log(bigObject.names[1]);
console.log(bigObject.grades[1].middle);

const cart = {
  orderID: 12345,
  shopperName: "Ваня Иванов",
  shopperEmail: "ivanov@example.com",
  contents: [
    {
      productID: 34,
      productName: "Супер товар",
      quantity: 1
    },
    {
      productID: 56,
      productName: "Чудо товар",
      quantity: 3
    }
  ],
  orderCompleted: true
}

console.log(cart.contents[1].productName);*/

const cools = document.getElementsByClassName('cool');
console.log(cools[0]);

cools[0].innerHTML = "I am first";


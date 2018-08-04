const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

button.onclick = () => {
	lorems.forEach((lorem) => {
		lorem.style.fontSize = '30px';
	})
}


let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]

for (key in names) {
	for (i in names[key]) {
		for (j in names[key][i])
			console.log(names[key][i][j]);
	}
}

/*while (names.length > 0) {
	  let item = names.shift();
	  if (typeof item === 'string')
		    console.log(item); 
	  else    
	  	names.splice(0, 0, ...item);}*/

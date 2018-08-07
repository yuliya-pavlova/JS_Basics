const APIKey = 'c26440f8eb496bc87f977c5e9c268bfa';

if (document.readyState || document.body.readyState=='complete')
{
   console.log('Load!');
}
class Person {
	constructor(name) {
		this.name = name;
		this.happines = 0;
	}
	hasCat() {
		return this.happines += 1;
	}
	hasRest() {
		return this.happines += 1;
	}
	hasMoney() {
		return this.happines += 1;
	}
	isSunny() {
	let xhr = new XMLHttpRequest;

	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + 'Moscow' + '&appid=' + APIKey;

	xhr.open('GET', url, false);

	xhr.send();
	if (xhr.status != 200) {
		console.log(xhr.status + '' + xhr.statusText);
	} else {
		var DATA = JSON.parse(xhr.responseText);
		const Temp = Math.round(DATA.main.temp - 273)

		if (Temp > 15) {
			this.happines += 1;
			return this.happines;
		} else 
			return this.happines;
		}
	}
}
const form = document.forms[0];
const input = document.getElementsByTagName('input');


form.onsubmit = function(e) { 
	e.preventDefault();
	const Name = new Person(form.elements.name.value);

	for(i=0;i<(input).length;i++){
		if(input[i].checked && input[i].getAttribute('type')=='radio' && input[i].getAttribute('value')=='yes'){
			switch(input[i].getAttribute('name')) {
				case 'cat':
					Name.hasCat();
					break;
				case 'rest':	
					Name.hasRest();
					break;
				case 'money': 
					Name.hasMoney();
					break;
					
			}

 		 }

	}

	Name.isSunny(); 
	console.log(Name.happines);
	console.log(Name.name);

	switch (Name.happines) {
		case (4):
			document.querySelector('.personName').innerHTML = Name.name;
			document.querySelector('.icon').innerHTML = '😁';
			break;
		case(3):
			document.querySelector('.personName').innerHTML = Name.name;
			document.querySelector('.icon').innerHTML = '😐';
			break;
		case(2):
			document.querySelector('.personName').innerHTML = Name.name;
			document.querySelector('.icon').innerHTML = '😐';
			break;
		default: 
		document.querySelector('.personName').innerHTML = Name.name;
		document.querySelector('.icon').innerHTML = '☹️';
	}
}







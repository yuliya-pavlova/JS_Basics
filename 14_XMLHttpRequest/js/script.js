const APIKey = 'c26440f8eb496bc87f977c5e9c268bfa';

const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function(e) { 
	e.preventDefault();
	const city = form.elements.city.value;

	let xhr = new XMLHttpRequest;

	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

	xhr.open('GET', url, false);

	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status + '' + xhr.statusText);
	} else {
		var DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		insert.innerHTML = DATA.main.temp - 273
	//document.write(DATA.main.temp - 273);
	}
}




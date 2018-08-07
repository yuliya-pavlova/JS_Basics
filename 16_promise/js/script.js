function applyForVisa(documents) {
	console.log('Обработка заявления');
	let promise = new Promise(function(resolve,reject) {
		setTimeout(function() {
			Math.random() > 0 ? resolve({}) : reject('В Визе отказано: нехватка документов');
		}, 2000);
	});
	return promise;
}

function getVisa(visa) {
		console.info('Виза получена');
		return new Promise(function(resolve, reject) {
			resolve(visa);
		});
}
function bookHotel(visa) {
	console.log(visa);
	console.log('Бронируем отель');
	return {};

}

function buyTickets() {
	console.log('Покупаем билеты');
	console.log('Бронь', booking);

}

applyForVisa({})
	.then(getVisa)
	.then(bookHotel)
	.then(buyTickets)
	.catch(error => console.log(error));
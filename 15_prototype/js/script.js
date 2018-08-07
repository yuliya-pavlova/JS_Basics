console.log('You are at ' + window.location);

/*let Animal = {
	canEat: true,
	hasParents: true
}

let Cow = {
	givesMilk: true,
	__proto__: Animal
}
console.log(Cow.givesMilk);
console.log(Cow.canEat);

for (key in Cow) {
	console.log(key);
}

let Users = {
	hasAccesTpProfile: true,
	approved: true,
	sayHi: function() {return 'Привет!'}
}

function User(name, email, password) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
}

const Fedya = new User('Федя', 'f@ex.com', 'qwerty');
console.log(Fedya);
console.log(Fedya.sayHi());*/

class User{
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hello ' + this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Hello ' + this.name + '! ты зарегистрирована';
	}
}

const Man = new User('someone', '12d@mail.ru', '123456');
console.log(Man.sayHi());

const Anya = new Female('Аня', '33434@mail.ru', 'qwerty');
console.log(Anya.sayHi());

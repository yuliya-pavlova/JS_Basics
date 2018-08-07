class Custumer{
	constructor(name) {
		this.name = name;
	}
	bay() {
		return 'Куплено'
	}
}

class childCustumer extends Custumer {
	getPresent() {
		console.log('Шарик в подарок');
	}
}

const Mila = new Custumer('Mila');
console.log(Mila);
console.log(Mila.bay());

const Ira = new childCustumer('Ira');
console.log(Ira);
console.log(Ira.bay());
console.log(Ira.getPresent());

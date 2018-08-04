console.log('You are at ' + window.location);

let person = {
	name : "Sasha",
	surname : "Ivanov",
	age : 30,
	teacher : true,
	sayHello : function() { return 'Hello ' + this.name}
}

console.log(person.name);
console.log(person.sayHello());

person.age = 29;

console.log(person['age']);
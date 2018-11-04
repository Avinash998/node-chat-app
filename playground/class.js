class Person {
	constructor(name, age){
		console.log(`${name} => ${age}`);
		this.name = name;
		this.age = age;
	}
	getUserDescription () {
		return `${this.name} is ${this.age} years old.`;
	}
};

var me = new Person('Avinash',25)
console.log(me);
var description = me.getUserDescription();
console.log(description);
const name = 'foysal';
const age  = 12;
const normalConcat = 'HI! i am ' +name+ ' and i am ' +age+ ' year old.';
console.log(normalConcat);

const templateLiteral = `Hi am ${name} and i am ${age} year old.`;
console.log(templateLiteral)

const friends = ['aziz','asif','asraf'];
const azizFriends = ['asraf','atif'];
const asifFriends = ['anas','abrar'];
const ashrafFriends = ['abida','anisha'];

const mutualFriends = [...azizFriends,...asifFriends,...asifFriends];
console.log(mutualFriends);

const foysal = {name:'foysal',age:'NaN',aim:'web developer',dream:'be great',nightmare:'error'}

const {name,age,aim} = foysal;
console.log(name)
console.log(age)
console.log(aim)

class Parent{
	constructor(){
		this.instructor = 'ad gupta sir';
	}
}

class User extends Parent{
	constructor(name,age){
		super();
		this.name = name;
		this.age = age;
	}
}

const foysal = new User('kazi foysal',1020);

const simpleBio = `Hi , i am ${foysal.name} i am nan ${foysal.age} old and my instructor is ${foysal.instructor}`;
console.log(simpleBio)
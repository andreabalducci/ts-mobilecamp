import {Jedi} from "./jedi"
import {Princess} from "./princess"


function hello(who: { name: string }) {
	console.log("Hello " + who.name + "!");
	if (who instanceof Jedi) {
		who.useTheForce();
	}
}
	
// LET
let characters = [
	new Jedi(
		'Luke Skywalker',
		'http://starwars.wikia.com/wiki/Luke_Skywalker'
		),
	new Princess(
		'Leia Organa Solo',
		'http://starwars.wikia.com/wiki/Leia_Organa_Solo'
		),
	{
		name: "Yoda",
		bio: "one of the most renowned and powerful Jedi in galactic history"
	}
];

// Destructuring
var [luke, leia, yoda] = characters;

(<Jedi>luke).train(10);

console.log("- - - - - - - - - - -");

hello(yoda);
hello(leia);
hello(luke);

console.log("- - - - - - - - - - -");

// for ... of ... 
for (var c of characters) {
	console.log(c);
}
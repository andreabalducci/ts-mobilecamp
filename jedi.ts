export interface IJedi {
	name: string;
}

export class Jedi implements IJedi {
	private level:number = 0;
	constructor(public name: string, public bio: string) {
		this.level = 15;
	}

	useTheForce() {
		console.log(`Hey ${this.name} using the force`);
	}
	
	train(levelUp : number){
		this.level += levelUp;
		return this.level;
	}
}
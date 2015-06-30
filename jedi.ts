import {log, type, inspect} from "./decorators"

export interface IJedi {
	name: string;
}

@type
export class Jedi implements IJedi {
	private level:number = 0;
	constructor(public name: string, public bio: string) {
		this.level = 15;
	}

	@inspect
	useTheForce() {
		console.log(`Hey ${this.name} using the force`);
	}
	
	@log
	train(levelUp : number){
		this.level += levelUp;
		return this.level;
	}
}
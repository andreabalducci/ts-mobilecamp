export function log(target: Function, key: string, descriptor: any) {
	var original = descriptor.value;
	descriptor.value = function(...args: any[]) {
		var a = args.map(a => JSON.stringify(a)).join();
		var result = original.apply(this, args);
		var r = JSON.stringify(result);
		console.log(`call: ${key}(${a}) => ${r}`);
		return result;
	}

	return descriptor;
}

export function inspect(target: Function, key: string, descriptor: any) {
	var original = descriptor.value;
	descriptor.value = function() {
		console.log(' ')
		console.log('[PRE ] The Force is strong with this one');
		original.apply(this);
		console.log('[POST] The Force will be with you, always');
		console.log(' ')
	}
	return descriptor;
}


export function type(target) {
	// instrument type system
}
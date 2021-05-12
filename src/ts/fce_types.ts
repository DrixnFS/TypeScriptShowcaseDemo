//You can specify function to be void that it doesnt return anything. This still returns undefined in runtime if called
function voidFunction(num: number): void {}

//You can also specify it like this but typescript takes it if you specify fce as undefined it must return nothing, so return must  be in fce. Dont use this
function voidFunction2(num: number): undefined {
	return;
}

//BIG THING!!! You can actually set variables to be private, protected or public. Only works in class tho
class Pupe {
	public myPublicFce(): void {};
	private notGonnaSeeThisFce(): any {};
	protected immaProtectedBoi(): void{};
}

//You can set variable as function type for future function holding
let futureFceVar: Function;
futureFceVar = function () {};

//!You can also be more precise with Function type also known as Function Type!
//Basically this says preciseFceVar will store a function without arg and will return a number
let preciseFceVar: () => number;
//Basically this says preciseFceVar2 will store a function which needs argument a as number and argument b as number and will return a number
let preciseFceVar2: (a: number, b: number) => number;
//you could also specify that the variable will hold one of the existing functions in the future and nothing else
let preciseFceVar3: VoidFunction;

//You can also specify the function type in argument of a function for specific callback functions
//NOTE! Eventho you use function with return as CB as we want void function it wont show you error, that is becouse saying void in CB you sayin you ignoring the return anyway so you dont care what returns
function fceWithCb(n1: number, n2: number, cb: (num: number) => void) {}

//You can also specify if the function NEVER returns a value, like if this throws the error it will never return the undefined.
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
	//also infinite loops never returns value etc...
}

//Functions can allso return promise and the promise can have a type. If promise type is boolean function MUST return boolean
//NOTE! If working with promise type you must have atleast ES2015 setup in your tsconfig as target, ES3 and ES5 doesnt support promises like that
async function promiseMe() : Promise<boolean> {
	return false
}

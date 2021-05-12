//Typescript automatically takes the type from the value used at inicialization of variable
const num = 5;
//This manual type can be used but is taken as wrong syntax as there is no reason
const num_manual: number = 5;
//Also you can define void variables but in that case you should define what type it will hold at one point
var num_noval: number;

//NOTE! Allways add type to variable ONLY IF you dont give it a value to inicializate with

//Typescript automatically makes type for the object - Right syntax
const object = {
	user: "Tester",
	age: 20,
};
//Manually typed Typescript type for an object - Wrong syntax
const object_manual: {
	user: string;
	age: number;
} = {
	user: "Tester",
	age: 20,
};

//Array type in Typescript, array cares about what types goes in it and dont let anything else go there
const object_array = {
	user: "Tester",
	age: 20,
	hobbies: ["Sports", "Cooking"],
};
//That array is basically this when done manualy - Wrong syntax, let it do this automatically
const object_array_manual: {
	user: string;
	age: number;
	hobbies: string[];
} = {
	user: "Tester",
	age: 20,
	hobbies: ["Sports", "Cooking"],
};

//Typescript also allows mixed array like this - right syntax
const arr = [1, "stringous"];
//mixed array basically looks liek this - wrong syntax
const arr_manual: any[] = [1, "stringous"];

//Also you can specify type for every field in array , this is called Tuple - right syntax
const arr_mixed = [1, "stringous", false];
//basically would loke like this manually - wrong syntax
const arr_mixed_manual: [number, string, boolean] = [1, "stringous", false];
//NOTE! TUPLE - in array if you specify types for each field in the array you cannot push in the array anymore as the length is set to however many fields you specified, youd need to re-assign the whole array

//Enum custom type creation, great for roles etc.. it automatically assign numbers to it based on position so admin is 0, read only 1 etc...
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}
//And you can easily get the value like you would get value from object
Role.ADMIN; // - 0
//You can also specify what exacly every value holds. only string or number types tho
enum Role2 {
	ADMIN = "ADMIN",
	READ_ONLY = 100,
	AUTHOR = "AUTHOR",
}
Role2.READ_ONLY; // - 100
Role2.ADMIN; // - ADMIN

//NOTE! Dont use any, * , type as it takes all of the advantages of the TypeScript

//If you need to accept few different types of variables Union type is the way
var union: number | string;
var union2: number | string | boolean;

//Typescript also handles Literall types for specific values, automatically for constants but can be done for vars
const literall = 2.8; // - Type is Number 2.8 and the value cant have anything else than 2.8 in it
var literall_var: 2.8 = 2.8; //Same as above but now we specified it for variable so it acts like a constant
//Could be really usefull for function arguments if function needs string operator you could make literall argument so you dont have to check what exactly goes in every time
function literallArgFce(literall: "first-option" | "second-option") {
	console.log("literall value", literall);
}
//Note! if you even call this function and you send first argument literall as soemthing else than what you specified youd seem error in your IDE

//Typescript also makes you able to do you own custom types, Aliases...
type CustomAliasType = number; // dont make much sence
type Combinable = number | string; // as union it makes much more sence, istead of using this specific union type for every variable or function this Alias type saves us time and readability
type LiterallRoleType = "ADMIN" | "DEVELOPER" | "PLEB"; // Can also be used for literalls or anything you think of, even custom object types
type SessionObjectType = {
	username: string;
	sessiontoken: string;
	session_created: Date;
}; // As i said before, custom object types can defined so you can use this custom type on any of your objects and it will allow only the items you specified in the type

//Example of using specific object type
const UserStorage: SessionObjectType = {
	username: "Pepega",
	sessiontoken: "test",
	session_created: new Date(),
};

// if you dont know what exactly the variable is as type you can use uknown
let userInput: unknown;
let userName: string;
//Unknown is restrictive tho as you cant just slam it into any other variable
// userName = userInput;
//For you to be able to slam it into other variables you need actually check the type of the variable
if (typeof userInput === "string") {
	userName = userInput;
}

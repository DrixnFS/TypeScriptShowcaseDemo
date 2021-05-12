"use strict";
//Typescript automatically takes the type from the value used at inicialization of variable
var num = 5;
//This manual type can be used but is taken as wrong syntax as there is no reason
var num_manual = 5;
//Also you can define void variables but in that case you should define what type it will hold at one point
var num_noval;
//NOTE! Allways add type to variable ONLY IF you dont give it a value to inicializate with
//Typescript automatically makes type for the object - Right syntax
var object = {
    user: "Tester",
    age: 20,
};
//Manually typed Typescript type for an object - Wrong syntax
var object_manual = {
    user: "Tester",
    age: 20,
};
//Array type in Typescript, array cares about what types goes in it and dont let anything else go there
var object_array = {
    user: "Tester",
    age: 20,
    hobbies: ["Sports", "Cooking"],
};
//That array is basically this when done manualy - Wrong syntax, let it do this automatically
var object_array_manual = {
    user: "Tester",
    age: 20,
    hobbies: ["Sports", "Cooking"],
};
//Typescript also allows mixed array like this - right syntax
var arr = [1, "stringous"];
//mixed array basically looks liek this - wrong syntax
var arr_manual = [1, "stringous"];
//Also you can specify type for every field in array , this is called Tuple - right syntax
var arr_mixed = [1, "stringous", false];
//basically would loke like this manually - wrong syntax
var arr_mixed_manual = [1, "stringous", false];
//NOTE! TUPLE - in array if you specify types for each field in the array you cannot push in the array anymore as the length is set to however many fields you specified, youd need to re-assign the whole array
//Enum custom type creation, great for roles etc.. it automatically assign numbers to it based on position so admin is 0, read only 1 etc...
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//And you can easily get the value like you would get value from object
Role.ADMIN; // - 0
//You can also specify what exacly every value holds. only string or number types tho
var Role2;
(function (Role2) {
    Role2["ADMIN"] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 100] = "READ_ONLY";
    Role2["AUTHOR"] = "AUTHOR";
})(Role2 || (Role2 = {}));
Role2.READ_ONLY; // - 100
Role2.ADMIN; // - ADMIN
//NOTE! Dont use any, * , type as it takes all of the advantages of the TypeScript
//If you need to accept few different types of variables Union type is the way
var union;
var union2;
//Typescript also handles Literall types for specific values, automatically for constants but can be done for vars
var literall = 2.8; // - Type is Number 2.8 and the value cant have anything else than 2.8 in it
var literall_var = 2.8; //Same as above but now we specified it for variable so it acts like a constant
//Could be really usefull for function arguments if function needs string operator you could make literall argument so you dont have to check what exactly goes in every time
function literallArgFce(literall) {
    console.log("literall value", literall);
}
//Example of using specific object type
var UserStorage = {
    username: "Pepega",
    sessiontoken: "test",
    session_created: new Date(),
};
// if you dont know what exactly the variable is as type you can use uknown
var userInput;
var userName;
//Unknown is restrictive tho as you cant just slam it into any other variable
// userName = userInput;
//For you to be able to slam it into other variables you need actually check the type of the variable
if (typeof userInput === "string") {
    userName = userInput;
}

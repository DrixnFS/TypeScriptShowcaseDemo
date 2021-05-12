"use strict";
//You can specify function to be void that it doesnt return anything. This still returns undefined in runtime if called
function voidFunction(num) { }
//You can also specify it like this but typescript takes it if you specify fce as undefined it must return nothing, so return must  be in fce. Dont use this
function voidFunction2(num) {
    return;
}
//You can set variable as function type for future function holding
var futureFceVar;
futureFceVar = function () { };
//!You can also be more precise with Function type also known as Function Type!
//Basically this says preciseFceVar will store a function without arg and will return a number
var preciseFceVar;
//Basically this says preciseFceVar2 will store a function which needs argument a as number and argument b as number and will return a number
var preciseFceVar2;
//you could also specify that the variable will hold one of the existing functions in the future and nothing else
var preciseFceVar3;
//You can also specify the function type in argument of a function for specific callback functions
//NOTE! Eventho you use function with return as CB as we want void function it wont show you error, that is becouse saying void in CB you sayin you ignoring the return anyway so you dont care what returns
function fceWithCb(n1, n2, cb) { }
//You can also specify if the function NEVER returns a value, like if this throws the error it will never return the undefined.
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //also infinite loops never returns value etc...
}

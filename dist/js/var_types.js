"use strict";
var num = 5;
var num_manual = 5;
var num_noval;
var object = {
    user: "Tester",
    age: 20,
};
var object_manual = {
    user: "Tester",
    age: 20,
};
var object_array = {
    user: "Tester",
    age: 20,
    hobbies: ["Sports", "Cooking"],
};
var object_array_manual = {
    user: "Tester",
    age: 20,
    hobbies: ["Sports", "Cooking"],
};
var arr = [1, "stringous"];
var arr_manual = [1, "stringous"];
var arr_mixed = [1, "stringous", false];
var arr_mixed_manual = [1, "stringous", false];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
Role.ADMIN;
var Role2;
(function (Role2) {
    Role2["ADMIN"] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 100] = "READ_ONLY";
    Role2["AUTHOR"] = "AUTHOR";
})(Role2 || (Role2 = {}));
Role2.READ_ONLY;
Role2.ADMIN;
var union;
var union2;
var literall = 2.8;
var literall_var = 2.8;
function literallArgFce(literall) {
    console.log("literall value", literall);
}
var UserStorage = {
    username: "Pepega",
    sessiontoken: "test",
    session_created: new Date(),
};
var userInput;
var userName;
if (typeof userInput === "string") {
    userName = userInput;
}
var customObject = {
    sessionObject: {
        username: "Pepega",
        sessiontoken: "test",
        session_created: new Date(),
    },
    index: 5,
    random: 'string'
};

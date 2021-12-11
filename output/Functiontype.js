"use strict";
//in typescript function itself a type
var helloFunct = function (a, b, c) {
    if (c === void 0) { c = "true"; }
    console.log(c);
    console.log("hello " + a + " " + b); //if any function is log it will return void
    //if we return it value will be undefined
    return a + b;
};
helloFunct("nabil", "alshad", "false");

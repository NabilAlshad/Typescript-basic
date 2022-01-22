"use strict";
let add;
//once function is declared it doesnot takes any parameter
add = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(add(5, 6, "minus"));

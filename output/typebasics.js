"use strict";
let playerName = "john";
console.log(playerName);
//once a variable is declared and defined it cannot be changed thats why it gives us error;
playerName = 12;
//but when it is assigned it will work
let A;
A = 45;
A = "doe";
//it is necessary to specify the type of arguement otherwise it will give us error
function multiply(a, b) {
    return a * b;
}
multiply(12, 12);
//array declarations
const fruits = ["apple", "banana", "grape"];
//if array is declared with string type or any other type that array should strict with that type .other type will not be allowed
fruits.push("guava");
// fruits.push(23); //this gives us error

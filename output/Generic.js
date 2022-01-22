"use strict";
//extends method
const addId = (obj) => {
    const id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { id });
};
const response = {
    name: "john",
    age: 30,
    data: "text",
};
const makeArr = (x) => {
    return [x];
};
const n1 = makeArr(5);
const n2 = makeArr("hello");
//extends methods
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + obj.lastName });
};
const A1 = makeFullName({ firstName: "john", lastName: "hello", age: 5 });
const userTab1 = {
    position: 0,
    id: 1,
    data: 45,
};
const userString = {
    id: 2,
    position: 0,
    data: "hello",
};

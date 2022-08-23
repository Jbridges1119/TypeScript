"use strict";
let names = ["luigi", "mario", "yoshi"];
// names.push(3);
let numbers = [1, 2, 3, 4, 5];
// numbers.push("shawn");
let mixed = ["ken", 3, "chun-li", 6, 4];
mixed.push("ryu");
mixed.push(4);
mixed[0] = 3;
let mySelf = {
    name: "Jeff",
    color: "Green",
    age: 36,
};
mySelf.age = 37;
mySelf.name = "Jeff Bridges";
// mySelf.age = '36';
// mySelf.knowledge = ['Bowhunting skills', 'Computer Hacking Skills'];
//Define variable with explicit types
let gamerHandle;
let age;
let isLoggedIn;
//Define array of strings - doesn't initialize as an empty array without `= []`;
let Jeff = [];
//Union Type
let mix = [];
//Object Type
let obj = {};
let definedObj;
//Any type
let house = 25;
//Functions
let greet;
//greet = 'hello';
greet = () => {
    console.log("hello, again");
};
//returns nothing or void
const add = (a, b, c) => {
    console.log(a + b);
};
add(5, 4);
//returns a number
const minus = (a, b) => {
    return a + b;
};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
//return void function
// () => void
//2 parameters (can be anything not just a and b) that returns void
let greet1;
//2 parameters that return void
greet1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
//else must be there or we wouldn't return a number
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};

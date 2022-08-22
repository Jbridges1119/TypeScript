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
let gamerHandle: string;
let age: number;
let isLoggedIn: boolean;

//Define array of strings - doesn't initialize as an empty array without `= []`;
let Jeff: string[] = [];

//Union Type
let mix: (string | number | boolean)[] = [];

//Object Type
let obj: object = {};
let definedObj: { name: string; age: number };

//Any type
let house: any = 25;

//Functions
let greet: Function;

//greet = 'hello';

greet = () => {
  console.log("hello, again");
};

//returns nothing or void
const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
};

add(5, 4);

//returns a number
const minus = (a: number, b: number): number => {
  return a + b;
};

//declare types
type StringOrNumber = string | number;
type objWithName = { name: string; uid: StringOrNumber };

const logDetails = (uid: StringOrNumber, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greeting = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

//return void function
// () => void

//2 parameters (can be anything not just a and b) that returns void
let greet1: (a: string, b: string) => void;
//2 parameters that return void
greet1 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

let calc: (a:number, b:number, c:string) => number;
//else must be there or we wouldn't return a number
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo
  }else {
    return numOne - numTwo;
  }
}
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

// mySelf.age = '36'
// mySelf.knowledge = ['Bowhunting skills', 'Computer Hacking Skills']

//Define variable with explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//Define array of strings - doesn't initialize as an empty array without `= []`
let Jeff: string[] = [];

//Union Type
let mix: (string | number | boolean)[] = [];

//Object Type
let obj: object = {};
let definedObj: {name: string, age: number}

//Any type
let house: any = 25;

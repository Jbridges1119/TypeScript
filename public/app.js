import { Invoice } from './classes/Invoice.js';
import { ListTemplates } from './classes/ListTemplates.js';
import { Payments } from './classes/Payments.js';
const me = {
    name: 'Jeff',
    age: 36,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
//this functions requires a variable that is setup with IsPerson
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
//declares that docOne/Two must have HasFormatter interface - which they do
let docOne;
let docTwo;
docOne = new Invoice('Winston', 'slept', 5);
docTwo = new Payments('Jeff', 'Wrote this down', 50);
//can be used in an array - only items with HasFormatter can be placed into the array
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice("Jeff", "made this class instance", 1000);
const invTwo = new Invoice("Winston", "made this class instance", 10);
console.log(invOne, invTwo);
//the variable is typed to the Class in order to let it hold that class instance
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'Jeff B'
invTwo.amount = 5;
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//END OF TESTING
// const anchor = document.querySelector('a');
// if(anchor){
// console.log(anchor.href);
// }
// const form1 = document.querySelector('form')!
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list the template instance 
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
//e is typed as an Event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Must be a tuples due to being used as a spreador within class creation
    //Tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'bill') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: 'Winston', age: 3 });
console.log(docThree.age);
const docFour = {
    uid: 1,
    resourceName: 'Jeff',
    data: 'shawn'
};
//ENUMS - Allows type to be made into custom list
var ResourseType;
(function (ResourseType) {
    ResourseType[ResourseType["BOOK"] = 0] = "BOOK";
    ResourseType[ResourseType["AUTHOR"] = 1] = "AUTHOR";
    ResourseType[ResourseType["FILM"] = 2] = "FILM";
    ResourseType[ResourseType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourseType[ResourseType["PERSON"] = 4] = "PERSON";
})(ResourseType || (ResourseType = {}));
const docFive = {
    uid: 1,
    //can select any from ResourceType
    resourceType: ResourseType.AUTHOR,
    data: 'shawn'
};
//Tuples - like arrays but typed position is fixed once initialized
//normal array
let arr = ['Kelsey', 31, true];
arr[0] = false;
arr[1] = 'Jeff';
//sets type of poistion in the array
let tup = ['kelsey', 31, true];
// tup[0] = false;
// tup[1] = 'Jeff';
tup[0] = 'Jeff';

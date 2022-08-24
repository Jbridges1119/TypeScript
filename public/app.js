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
    let doc;
    if (type.value === 'bill') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
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

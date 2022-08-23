"use strict";
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Jeff", "made this class instance", 1000);
const invTwo = new Invoice("Winston", "made this class instance", 10);
console.log(invOne, invTwo);
//the variable is typed to the Class in order to let it hold that class instance
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Jeff B';
invTwo.amount = 5;
console.log(invoices);
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
//e is typed as an Event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    //returns a number instead of a string
    amount.valueAsNumber);
});

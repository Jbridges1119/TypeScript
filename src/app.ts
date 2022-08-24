
import {Invoice} from './classes/Invoice.js'
import { ListTemplates } from './classes/ListTemplates.js';
import {Payments} from './classes/Payments.js'
import {HasFormatter} from './interfaces/HasFormatter.js'



//START OF TESTING

//interfaces ~ If we have a variable in the future called IsPerson it much have these properties
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
const me: IsPerson = {
  name: 'Jeff',
  age: 36,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount:number): number {
    console.log('I spent', amount)
    return amount
  }
}
console.log(me);

//this functions requires a variable that is setup with IsPerson
const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name)
}

greetPerson(me)


//declares that docOne/Two must have HasFormatter interface - which they do
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Winston', 'slept', 5)
docTwo = new Payments('Jeff', 'Wrote this down', 50)

//can be used in an array - only items with HasFormatter can be placed into the array
let docs:HasFormatter[] = []
docs.push(docOne);
docs.push(docTwo);





const invOne = new Invoice("Jeff", "made this class instance", 1000);
const invTwo = new Invoice("Winston", "made this class instance", 10);
console.log(invOne, invTwo);

//the variable is typed to the Class in order to let it hold that class instance
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

// invOne.client = 'Jeff B'
invTwo.amount = 5

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
})
//END OF TESTING

// const anchor = document.querySelector('a');
// if(anchor){
// console.log(anchor.href);
// }

// const form1 = document.querySelector('form')!
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list the template instance 
const ul = document.querySelector('ul')!
const list = new ListTemplates(ul)

//e is typed as an Event
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'bill'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
});

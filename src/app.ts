
import {Invoice} from './classes/Invoice.js'

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

//e is typed as an Event
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    //returns a number instead of a string
    amount.valueAsNumber
  );
});

import {HasFormatter} from '../interfaces/HasFormatter.js'

//classes
export class Payments implements HasFormatter {
  constructor(  
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}
  //If format wasn't present it would error due to implements HasFormatter
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
//classes
class Invoice2 {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
//If we use access modifiers then we can just write the function like so.
export class Invoice {
  constructor(  
    readonly client: string,
    private details: string,
    public amount: number
  ){}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
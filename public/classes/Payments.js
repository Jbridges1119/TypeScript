//classes
export class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //If format wasn't present it would error due to implements HasFormatter
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}

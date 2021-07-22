// ----------------------------------------------------- //
// CLASSES
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const me = {
    // the structure must match the interface
    name: "rasputin",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
console.log(me);
// we can declare another variable to be IsPerson
let someone;
// we can use it as a parameter in a function
const greetPerson = (person) => {
    console.log("Hey, ", person.name);
};
greetPerson(me);

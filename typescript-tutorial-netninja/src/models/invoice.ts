// ----------------------------------------------------- //
// CLASSES

export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

// drawbacks to using module system
// 1. only compatible with newer browsers
// 2. doesn't bundle code into a single file, it loads as separate files with separate network requests
// (can be fixed by using webpack)

// ----------------------------------------------------- //
// INTERFACES
// defines the specifications/structure of a class or object,
// describes the data shape (similar to creating a type)

interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const me: IsPerson = {
  // the structure must match the interface
  name: "rasputin",
  age: 20,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log("I spent", amount)
    return amount
  },
}

console.log(me)

// we can declare another variable to be IsPerson
let someone: IsPerson

// we can use it as a parameter in a function
const greetPerson = (person: IsPerson) => {
  console.log("Hey, ", person.name)
}
greetPerson(me)

import { Invoice } from "./models/Invoice";
import { Payment } from "./models/Payment";
import { ListTemplate } from "./models/ListTemplate";
const anchor = document.querySelector("a");
// anchor.href gives an error saying anchor might be null
// using a bang at the end tells ts that it does exist
// if (anchor) {
//   console.log(anchor.href)
// }
console.log(anchor.href);
// ts has special types for every DOM Element - const anchor is an HTMLAnchorElement
// const form = document.querySelector("form")!
// const form is an HTMLFormElement
const form = document.querySelector(".new-item-form");
// when selecting a class or ID, ts doesn't know what type of Element it is so we need to use type casting
console.log(form.children);
// ----------------------------------------------------- //
// INPUTS
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// // ----------------------------------------------------- //
// // CLASSES
// class Invoice {
//   readonly client: string
//   private details: string
//   public amount: number
//   // public is the access modifier, properties are public by default,
//   // can read and change value inside and outside class
//   // private properties cannot be accessed directly outside of the class,
//   // can only read and change inside the class
//   // readonly can be read outside and inside the class but can't be changed
//   // need to initialize the values
//   constructor(c: string, d: string, a: number) {
//     this.client = c
//     this.details = d
//     this.amount = a
//   }
//   // create method for this class
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`
//   }
// }
// // if we are using the access modifier, there is a shorthand way to initialize the values
// // class Invoice {
// //   constructor(
// //     readonly client: string,
// //     private details: string,
// //     public amount: number,
// //   ){}
// // }
let docOne;
let docTwo;
docOne = new Invoice("toad", "mobile", 450);
docTwo = new Payment("toadette", "banana boat", 300);
let docs = [];
docs.push(docOne, docTwo);
// docs can contain objects from different classes as long as they implement HasFormatter
console.log(docs);
const invOne = new Invoice("pikachu", "work on the pikamobile", 3000);
const invTwo = new Invoice("charmander", "work on the charmaster grill", 700);
console.log(invOne, invTwo);
// can change property of class object if public
// invOne.client = "wartortle"
invTwo.amount = 400;
// can make an array with only this class objects
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
// let formatted = invOne.format()
// console.log(formatted)
invoices.forEach((i) => {
    console.log(i.client, i.amount, i.format());
});
// ----------------------------------------------------- //
// GENERICS - blocks of reusable code that can be used with different types
// const addUID = (obj: object) => {
const addUID = (obj) => {
    // we add a generic in front in order to capture the properties of the object
    // can also be more specific e.g. <T extends {name: string}>
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let newDoc = addUID({ name: "Jimmy", age: 4 });
console.log(newDoc.name); // we are unable to get the individual properties without using the generic

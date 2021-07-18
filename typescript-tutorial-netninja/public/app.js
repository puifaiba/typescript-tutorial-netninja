"use strict";
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// ----------------------------------------------------- //
// CLASSES
class Invoice {
    // public is the access modifier, properties are public by default,
    // can read and change value inside and outside class
    // private properties cannot be accessed directly outside of the class,
    // can only read and change inside the class
    // readonly can be read outside and inside the class but can't be changed
    // need to initialize the values
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // create method for this class
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
// if we are using the access modifier, there is a shorthand way to initialize the values
// class Invoice {
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number,
//   ){}
// }
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

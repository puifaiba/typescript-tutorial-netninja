"use strict";
var anchor = document.querySelector("a");
// anchor.href gives an error saying anchor might be null
// using a bang at the end tells ts that it does exist
// if (anchor) {
//   console.log(anchor.href)
// }
console.log(anchor.href);
// ts has special types for every DOM Element - const anchor is an HTMLAnchorElement
// const form = document.querySelector("form")!
// const form is an HTMLFormElement
var form = document.querySelector(".new-item-form");
// when selecting a class or ID, ts doesn't know what type of Element it is so we need to use type casting
console.log(form.children);
// ----------------------------------------------------- //
// INPUTS
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// ----------------------------------------------------- //
// CLASSES
var Invoice = /** @class */ (function () {
    // public is the access modifier, properties are public by default,
    // can read and change value inside and outside class
    // private properties cannot be accessed directly outside of the class,
    // can only read and change inside the class
    // readonly can be read outside and inside the class but can't be changed
    // need to initialize the values
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // create method for this class
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("pikachu", "work on the pikamobile", 3000);
var invTwo = new Invoice("charmander", "work on the charmaster grill", 700);
console.log(invOne, invTwo);
// can change property of class object
invOne.client = "wartortle";
invTwo.amount = 400;
// can make an array with only this class objects
var invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
// let formatted = invOne.format()
// console.log(formatted)
invoices.forEach(function (i) {
    console.log(i.client, i.amount, i.format());
});
// class properties are public by default

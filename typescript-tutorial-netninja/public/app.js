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
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("pikachu", "work on the pikamobile", 3000);
var invTwo = new Invoice("charmander", "work on the grill charmaster", 700);
console.log(invOne, invTwo);

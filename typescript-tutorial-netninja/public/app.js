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
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

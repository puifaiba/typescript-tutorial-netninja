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
// when selecting a class, ts doesn't know what type of Element it is so we need to specify
console.log(form.children);

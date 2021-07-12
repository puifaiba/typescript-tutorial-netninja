// INTRO
var user = "Choppo"; // let and const will compile to var in js file
console.log(user);
var inputs = document.querySelectorAll("input");
console.log(inputs); // will print out a nodelist
inputs.forEach(function (input) {
    console.log(input);
});
var age = 3; // age is number type
var lovesSkateboards = false; // lovesSkateboards is boolean type
// user = 90, cannot change the type of a variable, user must be string
user = "Polly";
// age = "hi", age must be number
var circ = function (dia) {
    return dia * Math.PI;
};
// we can explicitly state the type by using the colon notation, dia must be a number
console.log(circ(9));
// ----------------------------------------------------- //
// ARRAYS
var veggies = ["broccoli", "kale", "cauliflower"];
veggies.push("brussel sprouts");
// veggies.push(3), cannot push a number as we've specified that veggies is an array of string type
// veggies[0] = 3, cannot reassign to a diff type
// veggies = "spinach", cannot change type of variable from array to string
var numbers = [3, 70, 42, 98];
numbers.push(484);
// numbers.push("sixty")
// numbers[1] = sixty
var mixedArr = ["choppo", 21, true, "pepe"];
// can make a mixed arr of diff types and now we can push or reassign to whatever type
mixedArr.push("ravi");
mixedArr[1] = false;
// ----------------------------------------------------- //
// OBJECTS
var hero = {
    name: "mario",
    belt: "black",
    age: 45
};
hero.age = 32;
hero.name = "luigi";
// hero.age = "32", cannot change from number to string in an object
// hero.skills = "plumbing", cannot add properties to object
hero = {
    name: "yoshi",
    belt: "green",
    age: 2
};
// ----------------------------------------------------- //
// EXPLICIT TYPES
var character;
var ageNow;
var isLoggedin;
// age = "jigglypuff", cannot be a diff type
ageNow = 99;
var ninjas = []; // can only be array of strings and should be initialized as empty string
ninjas.push("donatello");
//union type
// multiple types in an array
var mixed = [];
mixed.push("willy");
mixed.push(50);
mixed.push(false);
console.log(mixed);
// normal variables can also be union type
var uid;
uid = "258985";
uid = 948343;
// objects
var petOne;
petOne = { name: "choppo", age: 4 };
var petTwo;
// petTwo must only have the properties above to be valid
petTwo = {
    name: "hebe",
    age: 9,
    food: "mouse"
};
// ----------------------------------------------------- //
// DYNAMIC (ANY) TYPES
var weight = 599; //can initialize with value
weight = true;
console.log(weight);
weight = "nunya biz";
console.log(weight);
weight = { name: "yo mama" };
console.log(weight);
// kind of reverts ts back to js, no errors during development about types
// try not to use any type
var anyArr = [];
anyArr.push(8747);
anyArr.push("anyone");
var anyNinja;
anyNinja = { name: "leonardo", age: 18 };
console.log(anyNinja);
anyNinja = { name: 18, age: "leonardo" };
console.log(anyNinja);

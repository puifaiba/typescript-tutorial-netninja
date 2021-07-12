// INTRO

let user = "Choppo" // let and const will compile to var in js file
console.log(user)

const inputs = document.querySelectorAll("input")
console.log(inputs) // will print out a nodelist

inputs.forEach((input) => {
  console.log(input)
})

let age = 3 // age is number type
let lovesSkateboards = false // lovesSkateboards is boolean type

// user = 90, cannot change the type of a variable, user must be string
user = "Polly"
// age = "hi", age must be number

const circ = (dia: number) => {
  return dia * Math.PI
}
// we can explicitly state the type by using the colon notation, dia must be a number
console.log(circ(9))

// ----------------------------------------------------- //

// ARRAYS

let veggies = ["broccoli", "kale", "cauliflower"]
veggies.push("brussel sprouts")
// veggies.push(3), cannot push a number as we've specified that veggies is an array of string type
// veggies[0] = 3, cannot reassign to a diff type
// veggies = "spinach", cannot change type of variable from array to string

let numbers = [3, 70, 42, 98]
numbers.push(484)
// numbers.push("sixty")
// numbers[1] = sixty

let mixedArr = ["choppo", 21, true, "pepe"]
// can make a mixed arr of diff types and now we can push or reassign to whatever type
mixedArr.push("ravi")
mixedArr[1] = false

// ----------------------------------------------------- //

// OBJECTS

let hero = {
  name: "mario",
  belt: "black",
  age: 45,
}

hero.age = 32
hero.name = "luigi"
// hero.age = "32", cannot change from number to string in an object
// hero.skills = "plumbing", cannot add properties to object
hero = {
  name: "yoshi",
  belt: "green",
  age: 2,
  // skills = ["jumping"], also cannot change original structure of object, must have the same properties
}

// ----------------------------------------------------- //

// EXPLICIT TYPES
let character: string
let ageNow: number
let isLoggedin: boolean

// age = "jigglypuff", cannot be a diff type
ageNow = 99

let ninjas: string[] = [] // can only be array of strings and should be initialized as empty string
ninjas.push("donatello")

//union type
// multiple types in an array
let mixed: (string | number | boolean)[] = []
mixed.push("willy")
mixed.push(50)
mixed.push(false)
console.log(mixed)

// normal variables can also be union type
let uid: string | number
uid = "258985"
uid = 948343

// objects
let petOne: object
petOne = {name: "choppo", age: 4}

let petTwo: {
  name: string
  age: number
  food: string
}
// petTwo must only have the properties above to be valid
petTwo = {
  name: "hebe",
  age: 9,
  food: "mouse",
}

// ----------------------------------------------------- //

// DYNAMIC (ANY) TYPES
let weight: any = 599 //can initialize with value
weight = true
console.log(weight)
weight = "nunya biz"
console.log(weight)
weight = {name: "yo mama"}
console.log(weight)
// kind of reverts ts back to js, no errors during development about types
// try not to use any type

let anyArr: any[] = []
anyArr.push(8747)
anyArr.push("anyone")

let anyNinja: {name: any; age: any}
anyNinja = {name: "leonardo", age: 18}
console.log(anyNinja)
anyNinja = {name: 18, age: "leonardo"}
console.log(anyNinja)

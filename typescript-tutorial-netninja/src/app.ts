const anchor = document.querySelector("a")!
// anchor.href gives an error saying anchor might be null
// using a bang at the end tells ts that it does exist

// if (anchor) {
//   console.log(anchor.href)
// }

console.log(anchor.href)

// ts has special types for every DOM Element - const anchor is an HTMLAnchorElement

// const form = document.querySelector("form")!
// const form is an HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement
// when selecting a class or ID, ts doesn't know what type of Element it is so we need to use type casting
console.log(form.children)

// ----------------------------------------------------- //
// INPUTS
const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
  e.preventDefault()

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})

// ----------------------------------------------------- //
// CLASSES
class Invoice {
  client: string
  details: string
  amount: number

  constructor(c: string, d: string, a: number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice("pikachu", "work on the pikamobile", 3000)
const invTwo = new Invoice("charmander", "work on the grill charmaster", 700)

console.log(invOne, invTwo)

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

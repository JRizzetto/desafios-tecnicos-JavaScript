// export function add(a, b) {
//   return a + b;
// }

export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and my email is ${this.email}`);
  }
}

export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

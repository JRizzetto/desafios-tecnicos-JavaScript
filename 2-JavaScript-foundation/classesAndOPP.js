/* Exercise 1 - Create a class called Car with properties brand and year.
Add a method info() that prints: "This car is a [brand] and it was made in [year]."
Create 2 cars and call the info() method for each.
*/

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  info() {
    console.log(`This car is a ${this.brand} and it was made in ${this.year}.`);
  }
}

const car1 = new Car("Toyota", 1990);
car1.info();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

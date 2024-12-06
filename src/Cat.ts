import {Animal} from "./Animal";

// Cat class that extends Animal
export class Cat extends Animal {
  constructor(name: string, age: number, public color: string, public livesLeft: number) {
    super(name, age);
  }

  makeSound(): string {
    return "Meow! Meow!";
  }

  // Overrides the parent class method to add color and lives left details
  describe(): string {
    return `${super.describe()} It is ${this.color} and has ${this.livesLeft} lives left.`;
  }
}

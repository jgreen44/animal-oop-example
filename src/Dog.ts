import {Animal} from "./Animal";

type DogBreed =
  | "Golden Retriever"
  | "Labrador"
  | "Beagle"
  | "German Shepherd"
  | "Bulldog"
  | "Pit-Bull Mix"

// Dog class that extends Animal
export class Dog extends Animal {
  constructor(name: string, age: number, public breed: string, public isTrained: boolean) {
    super(name, age);
  }

  makeSound(): string {
    return "Woof! Woof!";
  }

  // Overrides the parent class method to add breed and training details
  describe(): string {
    return `${super.describe()} It is a ${this.breed} and ${this.isTrained ? "is" : "is not"} trained.`;
  }
}

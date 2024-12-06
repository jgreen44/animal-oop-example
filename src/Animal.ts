import  {IAnimal} from "types/interfaces"

// Base Abstract Animal class
export abstract class Animal implements IAnimal {
  protected constructor(public name: string, public age: number) {}

  // Abstract method must be implemented by child classes
  abstract makeSound(): string;

  // Common method for all animals
  describe(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

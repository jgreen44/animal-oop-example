// Interface for Animal
export interface IAnimal {
  name: string;
  age: number;

  // Methods that every animal must implement
  makeSound(): string;
  describe(): string;
}

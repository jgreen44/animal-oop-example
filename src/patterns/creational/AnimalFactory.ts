import {IAnimal} from "../../types/interfaces";
import {Dog} from "../../Dog";
import {Cat} from "../../Cat";

export class AnimalFactory {
  static createAnimal(type: string, name: string, age: number, extra: any): IAnimal {
    switch (type) {
      case "dog":
        return new Dog(name, age, extra.breed, extra.isTrained);
      case "cat":
        return new Cat(name, age, extra.color, extra.livesLeft);
      default:
        throw new Error("Unknown animal type");
    }
  }
}

// // Usage
// const factoryDog = AnimalFactory.createAnimal("dog", "Max", 4, { breed: "Labrador", isTrained: true }) as Dog;
// console.log(factoryDog.describe());
// // Output: Max is 4 years old. It is a Labrador and is trained.
//
// const factoryCat = AnimalFactory.createAnimal("cat", "Luna", 2, { color: "Gray", livesLeft: 7 }) as Cat;
// console.log(factoryCat.describe());
// // Output: Luna is 2 years old. It is Gray and has 7 lives left.

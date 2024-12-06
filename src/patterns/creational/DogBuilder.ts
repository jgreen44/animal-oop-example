import {Dog} from "../../Dog";

export class DogBuilder {
  private name: string = "Unnamed Dog";
  private age: number = 0;
  private breed: string = "Unknown Breed";
  private isTrained: boolean = false;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setBreed(breed: string): this {
    this.breed = breed;
    return this;
  }

  setTrained(isTrained: boolean): this {
    this.isTrained = isTrained;
    return this;
  }

  build(): Dog {
    return new Dog(this.name, this.age, this.breed, this.isTrained);
  }
}



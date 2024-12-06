import { Dog } from './Dog'
import {Cat} from "./Cat";
import {DogBuilder} from "./patterns/creational/DogBuilder";
import {CatSingleton} from "./patterns/creational/CatSingleton";
import {AnimalFactory} from "./patterns/creational/AnimalFactory";

// Usage
const dog = new Dog("Buddy", 5, "Golden Retriever", true);
console.log(dog.makeSound());
console.log(dog.describe());

const cat = new Cat("Whiskers", 3, "Black", 9);
console.log(cat.makeSound());
console.log(cat.describe());



// Create a Dog using the Builder Pattern
const builderDog = new DogBuilder()
  .setName("Rex")
  .setAge(6)
  .setBreed("German Shepherd")
  .setTrained(false)
  .build();

// Create a Dog using the Builder Pattern (example 2)
const trainedDog = new DogBuilder()
  .setName("Buddy")
  .setAge(5)
  .setBreed("Golden Retriever")
  .setTrained(true)
  .build();

// Retrieve a singleton Cat instance
const singletonCat = CatSingleton.getInstance().getCat();

// Create animals dynamically using the Factory Pattern
const factoryDog = AnimalFactory.createAnimal("dog", "Bella", 3, { breed: "Pit-Bull Mix", isTrained: true }) as Dog;
const factoryCat = AnimalFactory.createAnimal("cat", "Mittens", 5, { color: "Black", livesLeft: 8 }) as Cat;

// Output descriptions
console.log(builderDog.describe());
console.log(trainedDog.describe());
console.log(singletonCat.describe());
console.log(factoryDog.describe());
console.log(factoryCat.describe());






import {Cat} from "../../Cat";

export class CatSingleton {
  private static instance: CatSingleton;
  private readonly cat: Cat;

  private constructor() {
    this.cat = new Cat("Solo Cat", 3, "White", 9);
  }

  static getInstance(): CatSingleton {
    if (!CatSingleton.instance) {
      CatSingleton.instance = new CatSingleton();
    }
    return CatSingleton.instance;
  }

  getCat(): Cat {
    return this.cat;
  }
}


export {};

class Person {
  public name: string;
  protected age: number;
  protected nationarity: string;

  constructor(name: string, age: number, nationarity: string) {
    this.name = name;
    this.age = age;
    this.nationarity = nationarity;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationarity: string) {
    super(name, age, nationarity);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationarity: ${this.nationarity}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
console.log(taro.profile());

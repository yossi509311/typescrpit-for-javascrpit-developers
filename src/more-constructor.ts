export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 30);
console.log({ me });

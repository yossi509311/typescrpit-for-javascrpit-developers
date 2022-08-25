export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public lastName: string) {}
  }
}

const me = new Japanese.Tokyo.Person('Hamu');
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person('HamuYan');
console.log(meOsaka.name);

const you = new English.Person('Michel', 'Jackson');
console.log(you);

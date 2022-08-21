export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return this._secretNumber;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
console.log(card.owner);
// card.owner = 'Hamu';
console.log(card.debugPrint());
card.secretNumber = 1000000000;
console.log(card.debugPrint());
console.log(card.secretNumber);

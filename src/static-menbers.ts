export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work(): string {
    return `Hey, guis! This is ${this.firstName}!`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());

export {};

enum Months {
  January = 1,
  February,
  December,
}

console.log(Months.January);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008080',
}

let white = COLORS.WHITE;
console.log({ white });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;

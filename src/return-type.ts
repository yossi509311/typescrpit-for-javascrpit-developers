export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(5, 10));

type ReturnTypeFromAdd = ReturnType<typeof add>;

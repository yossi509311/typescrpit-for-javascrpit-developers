export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(5, 10));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

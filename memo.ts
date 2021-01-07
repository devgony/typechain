// memo.ts;
// 0. export {}; at the bottom
// 1. send proper number of arguments unless define params with "?"
// 2. use type after params
// 3. return type like string, void
const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

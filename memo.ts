// memo.ts;
// 0. export {}; at the bottom
// 1. send proper number of arguments unless define params with "?"
// 2. use type after params
// 3. return type like string, void
const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
// 4. interface: define the object type on TS level
interface Human {
  name: string;
  age: number;
  gender: string;
}
const nate = { name: "Nate", age: 29, gender: "M" };
// 5. class: implicitly define object type on JS level (privacy work on TS only)
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const henry = new Human("Henry", 29, "M");
// 6. type in array
let blockchain: Block[] = [genesisBlock];
// 7. static function is callable, even if class is not instantiated
// 8. TS is good for react, redux, express, graphQL

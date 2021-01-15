# typechain to study TS

## 0. `export {};` at the bottom

## 1. should send proper number of arguments (like '!' of graphql)

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; otherwise define params with "?" => optional

## 2. use type after params

## 3. return type like string, void

```typescript
const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
```

## 4. interface: define the object type on TS level

```typescript
interface Human {
  name: string;
  age: number;
  gender: string;
}
const nate: Human = { name: "Nate", age: 29, gender: "M" };
```

## 5. class: implicitly define object type on JS level (privacy work on TS only)

```typescript
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
```

## 6. type in array

```typescript
let blockchain: Block[] = [genesisBlock];
```

or

```typescript
let blockchain: [Block] = [genesisBlock];
```

## 7. static function is callable, even if class is not instantiated

```typescript
class Block {
  static calculateBlockHash = (
    index: number,
    previsouHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previsouHash + timestamp + data).toString();
  ...
}
```

## 8. TS is good for react, redux, express, graphQL

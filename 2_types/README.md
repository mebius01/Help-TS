# Types

[Type in JS](#type-in-js)

[Any](#any)

[String](#string)

[Number](#number)

[Null & Undefine](#null--undefine)

[Void](#void)

[Never](#never)

[Array](#array)

[Tuple](#tuple)

[Enum](#enum)


---
#### Type in JS

```javascript
typeof "Jon";    // "string "
typeof 42;       // "number "
typeof true;     // "boolean "
typeof [];       // "object "
typeof {};       // "object "
typeof null;     // "object "
typeof undefine; // "undefine"
typeof Symbol(); // "symbol"

```

#### Any
For dynamic content.

```typescript
let str: any = "Jon";
str = "12.5";
str = 12.5;
str = true || false
```

#### String

```typescript
const str: string = "Jon";
const num: string = "12.5";
const template: string = `His name is ${name}`;
```

#### Number

```typescript
const float: number = 12.5;
const integer: number = 12;
const hex: number = 0xf00d;
const binary: number = 0b10101;
const octal: number = 0o744;

```

#### Null & Undefine

null in JS === Object

in TS null === null
```typescript
const n: null = null;
const u: undefine = undefine;
```

#### Void

Void is used where there is no data
If a function does not return any value then you can specify void as return type
```typescript
function name(name): void {
  console.log(name)
}

const name = (name):void => {
  console.log(name)
}
```

#### Never

The function will never return a result

Function return Error
```typescript
function error(error): never {
  throw new Error(error)
}

const error = (error): never => {
  throw new Error(error)
}
```

Function infinite loop
```typescript
function error(error): never {
  while (true) { }
}

const error = (error): never => {
  while (true) { }
}
```

#### Array

Using square brackets
```typescript
const fruits: string[] = ['Apple', 'Orange', 'Banana'];
const age: number[] = [12, 23, 45, 34]
```

Using a generic array type
```typescript
const fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
const age: Array<number> = [12, 23, 45, 34]
```

Multi type array
```typescript
const values: (string | number | boolean)[] = ['Apple', 42, true, 'Bank', 12];
const age: Array<string | number | boolean> = ['Apple', 42, true]
```

#### Tuple

Tuple is an array with fixed size
```typescript
const employee: [number, string] = [1, "Steve"];
const person: [number, string, boolean] = [1, "Steve", true];

```

#### Enum

Enums allow a developer to define a set of named constants. 
There are three types of enums:

##### Numeric Enum  
**Newspaper** is initialized with 0.From now on, all following items are automatically incremented by **+1**
```typescript
enum PrintMedia {
  Newspaper = 0,
  Newsletter, // 1
  Magazine, // 2
  Book // 3
}

const newspaper: number = PrintMedia.Newspaper
console.log(newspaper) // 0
```

You can set initialization with *2*
```typescript
enum PrintMedia {
  Newspaper = 2,
  Newsletter, // 3
  Magazine, // 4
  Book // 5
}

const magazine: number = PrintMedia.Magazine
console.log(magazine) // 4
```

##### String Enum
```typescript
enum Num {
  one = "ONE",
  two = "TWO",
  three = "THREE",
  four = "FOUR"
}

const one: string = Num.one
console.log(one) // "ONE"
```

##### Heterogeneous Enum
```typescript
enum Status { 
  Active = 'ACTIVE', 
  Deactivate = 1, 
  Pending
}
```

---


[Previous](./../1_started/README.md) | [Home](./../README.md) | [Next](./../3_functions/README.md)


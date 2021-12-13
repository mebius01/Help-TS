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

[Pagination](#pagination)



---
#### Type in JS

- String
- Number
- Boolean
- Null
- Undefine
- Object
- Symbol

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

In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
There are three types of enums:

Numeric Enum
```typescript
enum PrintMedia {
  Newspaper = 1,
  Newsletter = 5,
  Magazine = 5,
  Book = 10
}
```

String Enum
```typescript
enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK"
}
```

Heterogeneous Enum
```typescript
enum Status { 
  Active = 'ACTIVE', 
  Deactivate = 1, 
  Pending
}
```

---
##### Pagination

[Previous](./../1_started/README.md) | [Home](./../README.md) | [Next](./../3_control_flow_statements/README.md)


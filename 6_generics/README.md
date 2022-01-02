# Generics

TypeScript generics allow you to write the reusable and generalized form of functions, classes, and interfaces.  
In this tutorial, you’re focusing on developing generic functions.


A generic type manipulates types and replaces itself  
Something like alies

```typescript
const num = <T>(data: T): T => data;
const a = num("string").length;
const b = num(12.123).toFixed(2);
```


#### Class 

```typescript
class User<T> {
  constructor(
    public name: T,
    public age: T
  ) { }
  
  run():string {
    return `${this.name} ${this.age}`
  }
}

const user1 = new User("John", "23").run();
const user2 = new User(12, 23).run();
```


```typescript
class User<S, N> {
  constructor(
    public name: S,
    public age: N
  ) { }
  
  run():string {
    return `${this.name} ${this.age}`
  }
}

const user1 = new User("John", 23).run();
```


#### Extends

```typescript
class User<S, N extends number> {
  constructor(
    public name: S,
    public age: N
  ) { }


  ageLimit():string {
    if (this.age <= 12) throw new Error("Age Limit")
    return `${this.name} ${this.age}`
  }
}

const user1 = new User("John", 13).ageLimit()
```


---


[Previous](./../5_interfaces/README.md) | [Home](./../README.md) | [Next](./../7_modules/README.md)



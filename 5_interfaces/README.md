# Interfaces
The interface defines the properties and methods that the object must implement

```typescript
interface IUser {
  name: string,
  role: string,

  sum(x:number, y:number):number
}

const user: IUser ={
  name: "John",
  role: "customer",

  sum: (x, y) => {
    return x * y
  }
}

```

#### Optional properties

```typescript
interface IUser {
  name: string,
  role: string,
  age?: number;
}

const user: IUser ={
  name: "John",
  role: "customer",
}
```

#### Readonly

```typescript
interface IUser {
  readonly name: string,
  role: string,
}

const user: IUser ={
  name: "John",
  role: "customer",
}

user.name = "Max" // Error
```

#### Extending

```typescript
interface IUser {
  id: number;
  name: string;
}

interface IUser{
  age: number;
}

let employee: IUser = {
  id: 1, 
  name: "Alice",
  age: 31
}
```


#### Inheritance

```typescript
interface IMovable {
  speed: number;
  move(): void;
}
interface ICar extends IMovable {
  fill(): void;
}
class Car implements ICar {
  speed: number;

  move(): void {
    console.log(`The car is moving at a ${this.speed}`);
  }

  fill(): void {
    console.log("Out of fuel");
  }
}

let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();
```

#### Class

```typescript
interface IUser {
  name: string,
  role: string,
  getName(): string;
}

class User implements IUser {
  constructor(
    public name: string,
    public role: string) { }
  
  getName(): string {
      return this.name
  }
  get getRole() {
    return this.role
  }
}

const u = new User("John", "customer");
u.getName()
u.getRole
```

```typescript
interface IUser {
  name: string,
  role: string,
  getName(): string;
}

interface IProfile {
  nik: string,
  getNik(): string;
}


class User implements IUser, IProfile {
  constructor(
    public name: string,
    public role: string,
    public nik: string
    ) { }

  getNik(): string {
    return this.nik
  } 
  getName(): string {
      return this.name
  }
  get getRole() {
    return this.role
  }
}

const u = new User("John", "customer");
u.getName()
u.getRole
```


---


[Previous](./../4_classes/README.md) | [Home](./../README.md) | [Next](./../6_generics/README.md)
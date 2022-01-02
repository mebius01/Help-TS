# Classes

#### Long implementation

```typescript
class User {
  firsName: string
  lastName: string
  age: string | number

  constructor(firstName: string, lastName: string, age: string | number) {
    this.firsName = firstName
    this.lastName = lastName
    this.age = age
  }
}
```

#### Short implementation

```typescript
class User {
  constructor(
    public firsName: string,
    public lastName: string,
    private age: string | number,
  ) { }
}
```

#### Access modifiers

```typescript
class User {
  constructor(
    public name: string,
    private country: string,
    protected state: string,
    readonly city: string,
  ) { }
}
```

##### public
The public modifier allows class properties and methods to be accessible from all locations.


```typescript
class User {
  constructor(
    public name: string,
  ) { }
}
```

##### private
The private modifier limits the visibility to the same-class only


```typescript
class User {
  constructor(
    private name: string,
  ) { }
}
```

##### protected
The protected modifier allows properties and methods of a class to be accessible within same class
and within subclasses


```typescript
class User {
  constructor(
    protected name: string,
  ) { }
}
```

##### readonly
To mark a property as immutable, you use the readonly keyword. T


```typescript
class User {
  constructor(
    readonly name: string,
  ) { }
}
```

#### Default properties

```typescript
class User {
  constructor(
    public name: string,
    readonly role: string = "user"
  ) { }
}
```

#### Accessors

##### Set

```typescript
class User {
  constructor(
    public name: string,
    private role: string = "user"
  ) { }

  createRole(role: string){
    this.role = role
  }

  set setRole(role: string){
    this.role = role
  }
}

const user = new User("John")
user.createRole("customer")
user.setRole = "agent"
```

##### Get

```typescript
class User {
  constructor(
    public name: string,
    private pass: string,
    readonly role: string = "user"
  ) { }

  set setPass(pass: string):void {
    this.pass = pass
  }

  get getUser() {
    return {
      name: this.name,
      password: this.pass,
      role: this.role
    }
  }
}

const user = new User("John", "password");
console.log(user);
user.setPass = "pass123";
console.log(user);
console.log(user.getUser);
```

#### Inheritance 

```typescript
class User {
  constructor(
    public name: string,
    public role: string = "user"
  ) { }
}

class Gamer extends User {
  constructor(
    name: string,
    public game: string,
  ) {
    super(name);
  }
}

const user = new User("Name");
const gamer = new Gamer("John", "CS")

```

#### Abstract Classes

An abstract class is typically used to define common behaviors for derived classes to extend.  
Unlike a regular class, an abstract class cannot be instantiated directly.

```typescript

abstract class User {
  constructor(
    public name: string,
    public role: string = "user"
  ) { }

  abstract get getName(): string

  abstract get getRole(): string

}

class Gamer extends User {
  constructor(
    name: string,
    public game: Array<string>,
  ) {
    super(name);
  }

  get getName(): string {
    return this.name
  }

  get getRole(): string {
    return this.role
  }

  get getGame(): string[] {
    return this.game
  }
}

class Customer extends User {
  constructor(
    name: string,
    role: string = "customer",
  ) {
    super(name, role);
  }

  get getName(): string {
    return this.name
  }

  get getRole(): string {
    return this.role
  }
}

const gamer = new Gamer("John", ["CS",])
const customer = new Customer("Den")

console.log(gamer.getGame);
console.log(customer.getName, customer.getRole);
```


---


[Functions](./../3_functions/README.md) | [Home](./../README.md) | [Interfaces](./../5_interfaces/README.md)
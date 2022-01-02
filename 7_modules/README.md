# Modules

file "modules.ts"
```typescript
interface IDb {
  host: string,
  port: number,
  user: string,
  pass: string,

  connect():string
}

export const db: IDb = {
  host: "http://localhost",
  port: 5444,
  user: "user",
  pass: "password",

  connect: () => `postgres://${db.user}:${db.pass}@${db.host}:${db.port}`
};
```

file app.ts
```typescript
import { db } from "./modules";
console.log(db.connect());
```


---


[Generics](./../6_generics/README.md) | [Home](./../README.md) | [Decorators](./../8_decorators/README.md)
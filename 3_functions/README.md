# Functions

#### params

```typescript
const date = (year: number|string, month: number|string, day: number|string) => 
  `${year}-${month}-${day}`
```

#### default params

```typescript
const user = (name: string, age: number | string = 42) =>
  `user: ${name} age: ${age}`;
```

#### optional params

```typescript
const customer = (firstName: string, lastName?: string) => {
  if (lastName) return `user: ${firstName} ${lastName}`;
  return `user: ${firstName}`;
};
```

#### ...rest

```typescript
const dev = (...skills: string[]) => `Skills: ${skills.join(', ')}`;
```

#### returning

[Void](./../2_types/README.md#void)

[Never](./../2_types/README.md#never)


```typescript
const sum = (x: number, y: number): number => x + y
```


---


[Types](./../2_types/README.md) | [Home](./../README.md) | [Classes](./../4_classes/README.md)
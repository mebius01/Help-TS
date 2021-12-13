# Getting Started

[Install](#install)

[Get Help](#get-help)

[Set ECMAScript version](#set-ecmascript-version)

[Remove comments](#remove-comments)

[Set output directory](#set-output-directory)

[Combine files](#combine-files)

[Type Module](#type-module)

[Run compilation](#run-compilation)

[Auto compilation](#auto-compilation)

[tsconfig.json](#tsconfigjson)

[Pagination](#pagination)


---
#### Install

```bash 
npm install -g typescript
npm install -g ts-node

tsc -v
```

#### Get help

```bash
tsc -h
```

#### Set ECMAScript version
"ES5", "ES6" / "ES2015", "ES7" / "ES2016", "ES2017", "ES2018", "ES2019", "ES2020"

```bash
tsc app.ts -t ES2020
```

#### Remove comments

```bash
tsc app.ts --removeComments
```

#### Set output directory

```bash
tsc --outDir /home/user/project/... app.ts
```

#### Combine files

```bash
tsc --outFile output.js app.ts hello.ts
```

#### Type Module

```bash
tsc -m commonjs app.ts
```


#### Run compilation 

Create file "app.ts"
```javascript
const msg: string = "HW!"
const num: number = 42
console.log({msg, num});
```

``` bash
tsc 1_started/app.ts
```

#### Auto compilation

```bash
tsc -w app.ts
```

---

#### tsconfig.json
[www.typescriptlang.org](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[tsconfig.json с комментариями](https://gist.github.com/KRostyslav/82a25c469ffa6652825d58537ac6bc22)

Create file "tsconfig.json"

```json
{
  "compilerOptions": {
    "target": "es2020",
    "removeComments": true,
    "sourceMap": true,
    "outFile": "main.js",
    "files": ["app.ts"]
  }
}
```

---
##### Pagination

[Previous](./README.md) | [Next](./../2_types/README.md)
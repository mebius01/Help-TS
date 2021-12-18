//! Function
const fun = (str: string): void => console.log(str);
fun("Jon")

// const err = (msg: string): never => { throw new Error(msg) }
// err("Test Error")

//! Array
const arrNum: number[] = [1, 2, 3, 4];
console.log({arrNum});

const arrStr: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log({ arrStr });

const values: (string | number | boolean)[] = ['Apple', 42, true, 'Bank', 12];
console.log({ values });

//! Tuple
const tup: [string, number] = ["String", 42];
console.log(tup);

//! Enum

enum Str {
  one = "ONE",
  two = "TWO",
  three = "THREE",
  four = "FOUR"
}

enum Num {
  One,
  Two,
  Three,
  Four
}

enum Status {
  base = 1,
  standart,
  premium,
  gold = 8,
  platinum
}

const one = Str.one;
const two = Num[1];
const three = Num.Three;
const premium = Status.premium; // 3
const platinum = Status.platinum; // 9
console.log({  one, two, three, premium, platinum});
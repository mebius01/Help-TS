//! Function
const fun = (str) => console.log(str);
fun("Jon");
// const err = (msg: string): never => { throw new Error(msg) }
// err("Test Error")
//! Array
const arrNum = [1, 2, 3, 4];
console.log({ arrNum });
const arrStr = ['Apple', 'Orange', 'Banana'];
console.log({ arrStr });
const values = ['Apple', 42, true, 'Bank', 12];
console.log({ values });
//! Tuple
const tup = ["String", 42];
console.log(tup);
//! Enum
var Str;
(function (Str) {
    Str["one"] = "ONE";
    Str["two"] = "TWO";
    Str["three"] = "THREE";
    Str["four"] = "FOUR";
})(Str || (Str = {}));
var Num;
(function (Num) {
    Num[Num["One"] = 0] = "One";
    Num[Num["Two"] = 1] = "Two";
    Num[Num["Three"] = 2] = "Three";
    Num[Num["Four"] = 3] = "Four";
})(Num || (Num = {}));
var Status;
(function (Status) {
    Status[Status["base"] = 1] = "base";
    Status[Status["standart"] = 2] = "standart";
    Status[Status["premium"] = 3] = "premium";
    Status[Status["gold"] = 8] = "gold";
    Status[Status["platinum"] = 9] = "platinum";
})(Status || (Status = {}));
const one = Str.one;
const two = Num[1];
const three = Num.Three;
const premium = Status.premium; // 3
const platinum = Status.platinum; // 9
console.log({ one, two, three, premium, platinum });

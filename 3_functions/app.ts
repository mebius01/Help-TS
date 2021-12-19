//! Params
const date = (year: number | string, month: number | string, day: number | string) =>
  `${year}-${month}-${day}`;

const user = (firstName: string, lastName: string, age: number | string = 42) =>
  `user: ${firstName} ${lastName} age: ${age}`;

console.dir(date(2020, 12, 16));
console.dir(user("Doe", "John"));

//! Optional Params
const customer = (firstName: string, lastName?: string) => {
  if (lastName) return `user: ${firstName} ${lastName}`;
  return `user: ${firstName}`;
};

console.dir(customer("John"));


//! ...Rest
const dev = (name: string, ...skills: string[]) => `Developer: ${name} Skills: ${skills.join(', ')}`;

console.dir(dev("John", "Python", "JavaScript"));

//! Return type
const sum = (x: number, y: number): number => x + y
const arr = (...params: any): Array<any> => params

console.dir(sum(2,3));
console.dir(arr(42, true, "JavaScript"));
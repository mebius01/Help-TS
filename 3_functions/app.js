//! Params
const date = (year, month, day) => `${year}-${month}-${day}`;
const user = (firstName, lastName, age = 42) => `user: ${firstName} ${lastName} age: ${age}`;
console.dir(date(2020, 12, 16));
console.dir(user("Doe", "John"));
//! Optional Params
const customer = (firstName, lastName) => {
    if (lastName)
        return `user: ${firstName} ${lastName}`;
    return `user: ${firstName}`;
};
console.dir(customer("John"));
//! ...Rest
const dev = (name, ...skills) => `Developer: ${name} Skills: ${skills.join(', ')}`;
console.dir(dev("John", "Python", "JavaScript"));
//! Return type
const sum = (x, y) => x + y;
const arr = (...params) => params;
console.dir(sum(2, 3));
console.dir(arr(42, true, "JavaScript"));

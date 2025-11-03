const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log("Name:", name);
console.log("Age:", age);

const person1 = { name: "Alice", info: { age: 30, occupation: "Engineer" } };

const {
  name: name1,
  info: { age: age1, occupation },
} = person1;

console.log("Name:", name1);
console.log("Age:", age1);
console.log("Occupation:", occupation);

function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You're ${age} years old.`);
}

greetUser({ name: "Bob", age: 25 });

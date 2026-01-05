const person = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    eyeColor: "green"
  }
];

for (let i = 0; i < person.length; i++) {
  console.log(`${person[i].firstName} ${person[i].lastName} is ${person[i].age} years old with ${person[i].eyeColor} eyes`);
}

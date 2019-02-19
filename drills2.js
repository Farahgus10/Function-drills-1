'use strict';

function getYearOfBirth(age){
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);

  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }

  if (typeof age !== 'number' || typeof name !== 'string') {
    throw new TypeError();
  }

  return `Hello, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

try {
const greeting1 = createGreeting('Henry', 6);
console.log(greeting1);
} catch(e) {console.error(e);
}
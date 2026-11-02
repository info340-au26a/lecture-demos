'use strict';

console.log("executing other.js");

const peopleArray = ["John", "Paul", "George", "Ringo"];
console.log(peopleArray);

export function getFullName(personObj) {
  const {first, last} = personObj;
  return first + " " + last;
}

export function sayHello(name) {
  console.log("Hello", name);
}
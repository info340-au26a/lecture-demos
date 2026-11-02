'use strict';

import { getFullName, sayHello } from './other.js';


const fullName = getFullName({first: "Joel", last: "Ross"});
console.log(fullName);
sayHello(fullName);


console.log("executing main.js")

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
//console.log(peopleArray);


const foo = (params) => {
  return 'foo '+params;
}

console.log(foo("someone"));

// const sayHello = () => console.log("hello")

// const myArray = ['a', 'b'];
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];
// const [x, y, z] = myArray;
// console.log(x);
// console.log(y);
// console.log(z);

const myObject = {a: 1, b: 2};
const {a, c, b} = myObject;
console.log(a);
console.log(b);
console.log(c);



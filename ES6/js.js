//Compare Scopes of the var and let Keywords

//let sadece o fonksiyon veya block içerisinde dönebilir. var ise her yerden erişilebilir.

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//Mutate an Array Declared with const


const s = [5, 7, 2];
function editInPlace() {

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();

//Prevent Object Mutation

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Use Arrow Functions to Write Concise Anonymous Functions

var magic = function() {
  return new Date();
};

//dönüşüm sonrası + var'ı const olarak değiştirdik.

const magic = () => new Date();

//Write Arrow Functions with Parameters

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

//kodun arrow ile değiştirilmiş hali aşağıda.

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions

//eğer value boş ise (undefined ise) number ile 1'i toplar default olarak.

const increment = (number, value = 1) => number + value;

//Use the Rest Parameter with Function Parameters

const sum = (...args) => args.reduce((total, num) => total + num, 0);
// sum(0, 1, 2) returns 3.

//Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Copies all the contents of arr1 to arr2

console.log(arr2)

//Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow} = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

//Use Destructuring Assignment to Assign Variables from Arrays

const numbers = [1, 2, 3, 4, 5];

const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3


//Destructuring via rest elements

function removeFirstTwo(list) {
  const [, , ...arr] = list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;


//Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

//Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};

//OBJECT PROPERTY SHORTHAND SONRASI KOD AŞAĞIDA

const createPerson = (name, age, gender) => {
  return ({name, age, gender});
}

//Write Concise Declarative Functions with ES6

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'


//Use getters and setters to Control Access to an Object

class Thermostat {

  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }

  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
}

//Module script

<html>
  <head></head>
  <body>
    <script type="module" src="filename.js"></script>
  </body>
</html>


//Use export to Share a Code Block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};

//Reuse JavaScript Code Using import

import {uppercaseString, lowercaseString} from './string_functions.js'

uppercaseString("hello");
lowercaseString("WORLD!");

//Use * to Import Everything from a File

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Create an Export Fallback with export default

export default function subtract(x, y) {
  return x - y;
}

//Import a Default Export

import subtract from "./math_functions.js";

subtract(7,4);

//Create a JavaScript Promise

const makeServerRequest = new Promise((resolve, reject) => {

});

// Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

//Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

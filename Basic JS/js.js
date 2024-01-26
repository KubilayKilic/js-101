// COMMENTS SINGLE AND MULTI-LINE

// single-line comment

/* multi
  line
  comment
*/


// DATA TYPES

// 8 types of data

/* 
  undefined
  null
  boolean
  string
  symbol
  bigint
  number
  object
*/

var myName; // variable declare


// Storing Values with the Assignment Operator

var a;
a = 7;

//Assigning the Value of One Variable to Another

var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator

var d = 9;

// Declare String Variables

var myFirstName;
var myLastName;
myFirstName = "woba";
myLastName = "joba";

//Understanding Uninitialized Variables
/* When JavaScript variables are declared, 
they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable 
your result will be NaN which means "Not a Number". 
If you concatenate a string with an undefined variable, 
you will get a string of undefined. */

var a1;
var b1;
var c1;
a1 = 5;
b1=10;
c1="I am a"

a1 = a1 + 1;
b1 = b1 + 5;
c1 = c1 + " String!";

//Understanding Case Sensitivity in Variables

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver ;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver  = 9000;

//Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

//Declare a Read-Only Variable with the const Keyword

const FCC = "Morikava";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

//Add Two Numbers with JavaScript

const sum = 10 + 10;

//Subtract One Number from Another with JavaScript

const difference = 45 - 33;

//Multiply Two Numbers with JavaScript

const product1 = 8 * 10;

//Divide One Number by Another with JavaScript

const quotient = 66 / 33;

//Increment a Number with JavaScript

let myVar3 = 87;
myVar3++; // 88.

//Decrement a Number with JavaScript

let myVar2 = 11;
myVar2--; // 10.

//Create Decimal Numbers with JavaScript
// !Decimal numbers are sometimes referred to as floating point numbers or floats.
var myDecimal;
myDecimal = 5.7;

//Multiply Two Decimals with JavaScript

const product2 = 2.0 * 2.5; //5.0

//Divide One Decimal by Another with JavaScript

const quotient2 = 4.4 / 2.0;

//Finding a Remainder in JavaScript
// !remainder operator %
const remainder = 11 % 3;

console.log("11'in 3'e bölümünden kalan " + remainder);

//Compound Assignment With Augmented Addition

let a2 = 3;
let b2 = 17;
let c2 = 12;

a2 += 12;
b2 += 9;
c2 += 7;

//Compound Assignment With Augmented Subtraction

let a3 = 11;
let b3 = 9;
let c3 = 3;

a3 -= 6;
b3 -= 15;
c3 -= 1;

//Compound Assignment With Augmented Multiplication
//! *=

//Compound Assignment With Augmented Division
//! /=

//Escaping Literal Quotes in Strings

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings

const myStr = 'FirstLine\n' +'\t\\SecondLine\n' +'ThirdLine';

/* 
FirstLine
    \SecondLine
ThirdLine
*/

//Concatenating Strings with Plus Operator

const myStr = "This is the start. " + "This is the end.";

//Concatenating Strings with the Plus Equals Operator

let myStr;
myStr="This is the first sentence. "
myStr+="This is the second sentence."

//Constructing Strings with Variables

const myName = "waba";
const myStr = "My name is " + myName + " and I am well";

//Appending Variables to Strings

const someAdjective = "xyz";
let myStr3 = "Learning to code is ";
myStr3 += someAdjective; //learning the code is xyz

//Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

//Understand String Immutability

let myS = "bob";
myS[0] = "j"; // hata verecektir.

//Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]; // v

//Use Bracket Notation to Find the Last Character in a String

const lastName2 = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length -1]; // son karakteri bulacaktır.

//Use Bracket Notation to Find the Nth-to-Last Character in a String

const lastName1 = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Sondan ikinciyi bulur. c

//Store Multiple Values in one Variable using JavaScript Arrays

const myArray2 = ["merhaba", 12, "merhabayine", 13];

//Nest one Array within Another Array

const myArray4 = [["waba", 21], ["jaba", 22]];

//Access Array Data with Indexes

const myArray3 = [50, 60, 70];

var myData = myArray3[0];

//Modify Array Data With Indexes

const myArray1 = [18, 64, 99];

myArray1[0]=45;

//Access Multi-Dimensional Arrays With Indexes

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1]; // output 8

//!Manipulate Arrays With push Method

const myArray5 = [["John", 23], ["cat", 2]];

myArray5.push(["dog", 3]);

//!Manipulate Arrays With pop Method

const myArray8 = [["John", 23], ["cat", 2]];

const removedFromMyArray1 = myArray8.pop(); //son öğe çıkar. ["cat", 2]

//!Manipulate Arrays With shift Method

const myArray7 = [["John", 23], ["dog", 3]];

const removedFromMyArray2 = myArray7.shift(); // ilk öğe çıkar. ["John", 23]

//!Manipulate Arrays With unshift Method

const myArray6 = [["John", 23], ["dog", 3]];
myArray6.shift();

myArray6.unshift(["Paul", 35]); // dog, 3 çıkar yerine paul, 35 eklenir.

//!Shopping List

const myList = [
  ["egg", 3],
  ["eggplant", 4],
  ["apple", 1],
  ["banana", 2],
  ["milk", 1]
];

//!Write Reusable JavaScript with Functions

function reusableFunction() {
  console.log("AAliens!!");
}

reusableFunction(); //prints out AAliens!

//!Passing Values to Functions with Arguments

function functionWithArgs(param1,param2) {
  console.log(param1 + param2);
}

functionWithArgs(1,2); //3

//!Return a Value from a Function with Return

function timesFive(num){
  return num * 5;
}

//!Global Scope and Functions

let myGlobal;
myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//!Local Scope and Functions

function myLocalScope() {
  let myVar = 5;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar); //dışarıdan erişilemeyecek, yalnızca myLocalScope fonk içerisinde erişilebiliecek.

//!Global vs. Local Scope in Functions

const outerWear = "T-Shirt"; // global kapsamdaki bir değişken

function myOutfit() {
  const myOutfit = "sweater"; // myOutfit adında lokal bir değişken
  return myOutfit; // myOutfit değerini döndür, fonksiyon sona erer
  return outerWear; // Bu satır hiç işlenmeyecek, çünkü yukarıdaki return ifadesi fonksiyonu sonlandırır
}

myOutfit(); // Bu çağrı, myOutfit fonksiyonunu çağırır, ancak sadece "sweater" değerini döndürür.

//!Understanding Undefined Value returned from a Function

let sum = 0; // Global kapsamda bir değişken tanımlandı ve 0 değeri ile başlatıldı.

function addThree() {
  sum = sum + 3; // sum değişkenine 3 ekleyen fonksiyon
  // Bu fonksiyon çağrıldığında, sum değişkeni 3 artacak.
}

function addFive() {
  sum += 5; // sum değişkenine 5 ekleyen fonksiyon
  // Bu fonksiyon çağrıldığında, sum değişkeni 5 artacak.
}

addThree(); // addThree fonksiyonu çağrıldı, sum şu anda 3
addFive();  // addFive fonksiyonu çağrıldı, sum şu anda 8 (3 + 5)

// Bu noktada, sum değişkeni hem addThree fonksiyonunun hem de addFive fonksiyonunun etkisiyle 8 değerine ulaştı.

// Eğer şu an sum değişkenini yazdırırsak:
console.log(sum); // Bu, konsolda 8 değerini gösterir.


//!Assignment with a Returned Values

let processed = 0; // processed adlı bir değişken tanımlandı ve 0 değeri ile başlatıldı.

function processArg(num) {
  // processArg adlı bir fonksiyon tanımlandı. Bu fonksiyon bir parametre (num) alır.
  // Fonksiyon, parametre olan num'a 3 ekler, sonra 5'e böler ve sonucu döndürür.
  return (num + 3) / 5;
}

processed = processArg(7);
// processArg fonksiyonu çağrıldı ve 7 değeri ile çağrıldı.
// Fonksiyon, (7 + 3) / 5 işlemi sonucunu döndürdü ve bu değer, processed değişkenine atandı.

// Eğer şu an processed değişkenini yazdırırsak:
console.log(processed);
// Bu, konsolda (7 + 3) / 5 = 2 değerini gösterir.


//! Stand in Line

function nextInLine(arr, item) {

  // Verilen sayıyı (item'ı) arr dizisinin sonuna ekle
  arr.push(item);

  // Dizinin başındaki öğeyi (ilk öğeyi) kaldır
  var removedElement = arr.shift();
  
  // Kaldırılan öğeyi (removedElement) döndür
  return removedElement;
}

// Fonksiyonun kullanımı için örnek:
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Understanding Boolean Values

function welcomeToBooleans() {
  return true;
}

//Use Conditional Logic with If Statements

/* 
if (condition is true) {
  statement is executed

} */

function trueOrFalse(wasThatTrue) {

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

//Comparison with the Equality Operator ==

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10); //! Not Equal

//Comparison with the Strict Equality Operator ===
//! == string'i num'a çevirip karşılaştırır ör "2" == 2 true döner, === için bu durum false döndürür.

function testStrict(val){
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//Practice comparing different values

function compareEquality(a, b){
  if (a === b) {
    return "Equal"
  }
  return "Not Equal"
}

compareEquality("10", 10); //! Not Equal

//Comparison with the Inequality Operator

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10); //! not equal

//Comparison with the Strict Inequality Operator

function testStrictNotEqual(val){
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10); //! not equal

//Comparison with the Greater Than Operator

function testGreaterThan(val){
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//Comparisons with the Logical And Operator

function testLogicalAnd(val){
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);

//Comparisons with the Logical Or Operator

function testLogicalOr(val) {

  // Hem 10'dan küçük hem de 20'den büyük olma durumunu kontrol et
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

//Introducing Else Statements

function testElse(val){
  let result = "";

  if (val > 5) {
    return "Bigger than 5"
  } else {
    return "5 or Smaller"
  }

return result;
}

testElse(4);

//Introducing Else If Statements

function testElseIf(val){

  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
  return "Greater than or equal to 10";
}

//TODO sıralama önemli, 10'dan küçüklüğe önce bakılsa 4 için de 10'dan küçük değeri döneceksi halbuki 5'ten küçüklüğe özel kontrolcü varken 5'ten küçük dönmelidir.

}
orderMyLogic(7);

//Chaining If Else Statements

function testSize(num) {

  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

}

testSize(7);

//Golf Code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (par, strokes){

  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par -2) {
    return names [1];
  } else if (strokes == par -1) {
    return names [2];
  } else if (strokes == par) {
    return names [3];
  } else if (strokes == par + 1) {
    return names [4];
  } else if (strokes == par + 2) {
    return names [5];
  } else if (strokes >= par + 3) {
    return names [6];
  }
}

golfScore(5,4);

//Selecting from Many Options with Switch Statements

function caseInSwitch(val){
  let answer="";

  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer ="gamma";
      break;
    case 4:
      answer ="delta";
      break;
  } 


  return answer;
}

caseInSwitch(1);

//Adding a Default Option in Switch Statements

function switchOfStuff (val) {
  let answer="";

  switch (val) {
    case "a":
      answer ="apple";
      break;
    case "b":
      answer ="bird";
      break;
    case "c":
      answer ="cat";
      break;
    default:
      answer ="stuff";
      break;
  }

  return answer;
}

switchOfStuff(1);

//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  let answer= "";

  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer ="High";
      break;
  }

  return answer;
}

sequentialSizes(1);

//Replacing If Else Chains with Switch

function chainToSwitch (val) {
  let answer="";

  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer ="The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
chainToSwitch(7);

//Returning Boolean Values from Functions

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  }
  // Only change code above this line

isLess(10, 15);

//Return Early Pattern for Functions

function abTest(a,b){

  if (a < 0 || b < 0){
    return;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

//Counting Cards

let count = 0;

function cc(card){

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;

    case 7:
    case 8:
    case 9:
      count = count;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }

  var holdbet ="Hold";
  if (count > 0){
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Build JavaScript Objects

const myDog = {
  "name": "Waffles",
  "legs": 4,
  "tails": 1,
  "friends": ["humans", "other dogs"]
};

//Accessing Object Properties with Dot Notation

const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation

const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

//Accessing Object Properties with Variables

const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
}

const playerNumber = 16;
const player = testObj3[playerNumber];
console.log(player);

//Updating Object Properties

const myDog2 = {
  "name": "Lorelei",
  "legs": 4,
  "tails": 1,
  "friends": ["anya", "borfu"]
};

myDog.name = "Happy Lorelei";

//Add New Properties to a JavaScript Object

const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog3.bark = "woof";

//Delete Properties from a JavaScript Object

const myDog4 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog4.tails;

//Using Objects for Lookups

function phoneticLookup(val){
  let result="";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

//Testing Objects for Properties

function checkObj(obj, checkProp) {
  // obj nesnesinin checkProp adlı özelliğe sahip olup olmadığını kontrol et
  if (obj.hasOwnProperty(checkProp)) {
    // Eğer özellik varsa, özelliğin değerini döndür
    return obj[checkProp];
  } else {
    // Eğer özellik yoksa, "Not Found" (Bulunamadı) dizesini döndür
    return "Not Found";
  }
}

//Manipulating Complex Objects

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "sad",
    "title": "1eqwe",
    "release_year": 1978,
    "formats": [
    "vs vsvsvs vs", "asdasd"
    ]
  }
];

//Accessing Nested Objects

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1]; //pine

//Record Collection

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
    //! Eğer değer boş bir dize ise, verilen prop özelliğini albümden siler
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
    //! Eğer prop özelliği "tracks" değilse ve value boş bir dize değilse, o albümün prop özelliğine değeri atar 
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
    //!Eğer prop özelliği "tracks" ise ve value boş bir dize değilse, albümün tracks dizisini günceller. İlk olarak, eğer albümün tracks özelliği yoksa, ona boş bir dizi atar. Sonra, değeri albümün tracks dizisinin sonuna ekler.
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//Iterate with JavaScript While Loops

const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}// [5,4,3,2,1,0] şeklinde yazdırıp bir düşer.

//Iterate with JavaScript For Loops

const myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

//Iterate Odd Numbers With a For Loop

const myArray = [];

for (let i = 1; i < 10; i += 2){
  myArray.push(i);
}

//Count Backwards With a For Loop

const myArray = [];

for (let i = 9; i > 0; i -= 2){
  myArray.push(i);
} // [9, 7, 5, 3, 1]

//Iterate Through an Array with a For Loop

const myArray = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArray.length; i++) {
  total += myArray[i];
} //! 20

//Nesting For Loops

function multiplyAll(arr) {
  let product = 1;

  for(let i = 0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++){
      product *= arr[i][j];
    }
  }

  return product;
} 

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // 5040

//Iterate with JavaScript Do...While Loops

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 10); // only push the number 10, i will be 11 at the end but code will not exec again.

//Replace Loops using Recursion

function multiply(arr, n) {
  let product = 1;

  // for döngüsü ile dizinin ilk n elemanını çarpmaya başla
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }

  return product;
}

// Örnek bir dizi oluştur
const myArray = [2, 3, 4, 5];

const result = multiply(myArray, 3);

console.log(result); // Çıktı: 2 * 3 * 4 = 24

// örnek

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

//Profile Lookup

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

  for (let i=0; i<contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop] !== undefined) {
        return contacts[i][prop];
      } else {
        return "No such property"
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

//Generate Random Fractions with JavaScript

//! Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

function randomFraction() {

  return Math.random();
}

//Generate Random Whole Numbers with JavaScript


//! Math.floor(Math.random() * 20); You are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() to round the value down to the nearest whole number.

function randomWholeNum() {
  return Math.floor(Math.random()*10);
} // return a random whole number in the range from 0 to 9.

//Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

//Use the parseInt Function

function convertToInteger(str){

let answer = parseInt(str);
return answer;
}

convertToInteger("56");

//Use the parseInt Function with a Radix

const a = parseInt("11", 2);

// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

//Use the Conditional (Ternary) Operator

function checkEqual (a,b) {

  let result = (a === b) ? 'Equal': 'Not Equal';
  return result;
}

checkEqual(1,2); //Not Equal

//Use Multiple Conditional (Ternary) Operators

function checkSign(num) {

  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}

checkSign(10); //sayı pozitifse pozisitf, negatifse negatif, ikisi de değilse zero yazdırır.

//Use Recursion to Create a Countdown

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum +1, endNum);
      numbers.unshift(startNum);
      return numbers;
  }
}
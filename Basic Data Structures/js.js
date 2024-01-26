//Use an Array to Store a Collection of Data

let yourArray;

yourArray = [1, "two", true, "4", 5];

//Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];

myArray[1]  = "anything besides b";

console.log(myArray);

//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {

  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);

  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//Remove Items from an Array with pop() and shift()

function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

  arr.splice(1, 4); //kalanları toplamı 10'a eşit olacak şekilde splice uygulandı. 1.indeks dahil 4 tane saydı 4,5,1,7 bunları çıkardı.

console.log(arr);

//Add Items Using splice()

function htmlColorNames(arr) {

  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond'); // ilk iki elementi silerek, '' içindekileri ekler. 0.indeksten başla 2 say.

  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//Copy Array Items Using slice()

function forecast(arr) {

  return arr.slice(2, 4); // warm, sunny döndürür. 2. indeks dahil 4. dahil değil.
}


console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2)); //[[true, false, true], [true, false, true]]

//Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

//Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {

  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //bütün indekslere bakar ve eğer element arr indekslerinde varsa, boş array döner yoksa alttaki kod çalışır
      newArr.push(arr[i]); //varsa yani element array indeksinde yoksa yeni elemente ekler ve devam eder.
    }
  }

  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Create complex multi-dimensional arrays

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7,
  [
    [
      ["deepest"]
    ]
  ],
   1000, 'method'],
  ['concat',
  [
    "deep"
  ] ,false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate',[
    "maybee", ["deeper"]
  ], 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];

//ne kadar deep olduklarını gösteren bir kod aşağıda;

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] //3 level
  ],
  [
    [
      ['deepest'], ['deepest'] //4 level
    ],
    [
      [
        ['deepest-est?'] //5 level deep
      ]
    ]
  ]
];

//Add Key-Value Pairs to JavaScript Objects

const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;

console.log(foods);

//Modify an Object Nested Within an Object

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);

//Access Property Names with Bracket Notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {

  let scanned = foods[scannedItem];
  return scanned;
}

console.log(checkInventory("apples"));

//Use the delete Keyword to Remove Object Properties

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods['oranges'];
delete foods['plums'];
delete foods['strawberries'];

console.log(foods);

//Check if an Object has a Property

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {

  if('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj === true){
    return true;
  } else {
    return false;
  }
}

console.log(isEveryoneHere(users));

//Iterate Through the Keys of an Object with a for...in Statement

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));


//Generate an Array of All Object Keys with Object.keys()


let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {

  return Object.keys(obj); //object.keys() metodu Alan Jeff Sarah ve Ryan döndürür.

}

console.log(getArrayOfUsers(users));

//Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {

  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));

//friends arrayine pete'i ekler ve onu döndürür.
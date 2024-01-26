//Create a Basic JavaScript Object

let dog = {
  name: "bojo",
  numLegs: 4
};

//Use Dot Notation to Access the Properties of an Object

console.log(dog.name); //bojo
console.log(dog.numLegs); //4

//Create a Method on an Object

//(if object contains a function it will become a method, such as Math.random() -> math is an object containing random function.)

let cat = {
  name: "whisker",
  numLegs: 4,
  sayLegs: function() {
      return "This cat has " + this.numLegs + " legs.";
  }
};

console.log(cat.sayLegs());

//Define a Constructor Function

//contructors will start with capital letter to distinguish them from other functions, they will create new objects.

function Dog() {
  this.name = "bojo";
  this.color = "black";
  this.numLegs = 4;
}

//Use a Constructor to Create Objects

let hound = new Dog();


//Extend Constructors to Receive Arguments

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

let newDog = new Dog("mojo", 3, "border-collie");
console.log(newDog.name);

//Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(6);

myHouse instanceof House;

//Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");

let ownProps = [];

for (let x in canary){
  if(canary.hasOwnProperty(x)){
    ownProps.push(x);
  }
}
console.log(ownProps); //[ 'name', 'numLegs' ]

//Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2; //her seferinde duplicate numLegs yerine prototype kullanıldığında daha temiz ve verimli olur.

let beagle = new Dog("Snoopy");

//Iterate Over All Properties

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let x in beagle){ //this code will check, and
  if(beagle.hasOwnProperty(x)){ //if it has OwnProp it will push that
    ownProps.push(x); //into OwnProps array
  } else { //if not
    prototypeProps.push(x); //it will push that into other array.
  }
}

console.log(ownProps); // 'name'
console.log(prototypeProps); // 'numLegs'

//Understand the Constructor Property

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) { //this will check
  if(candidate.constructor === Dog) { // if constructor of the candidate
    return true;
  } else {
    return false;
  }
}

//Change the Prototype to a New Object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function(){
    console.log("");
  },
  describe: function(){
    console.log("");
  }
};

//Remember to Set the Constructor Property when Changing the Prototype

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, //! bunu tanımlamak önemli.
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Understand Where an Object’s Prototype Comes From

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle)); //true.

//Understand the Prototype Chain

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // true


Object.prototype.isPrototypeOf(Dog.prototype);

//Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,

};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
eat: function(){
  console.log("nom nom nom");
}
};

//Inherit Behaviors from a Supertype

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

//Set the Child's Prototype to an Instance of the Parent

Dog.prototype = Object.create(Animal.prototype);
//! burada aslında dog bir sub eleman animal'a göre ve Animal protoipini dog prototipine kopyalıyor bu işlem. Object.create fix.

//Reset an Inherited Constructor Property

//! kod aşağıda ekleme yapılmaz ise, constructor'ı dog veya bird olması gereken obje, constructor olarak animal döndürecektir ve bu karışıklığa sebep olacaktır.

Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;

//Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

let beagle = new Dog();
beagle.bark(); // Woof!

//Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {return "Alas, this is a flightless bird."};

let penguin = new Penguin();
console.log(penguin.fly());

//Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function(){
    console.log("gliding as always");
  };
};

glideMixin(bird);
glideMixin(boat);


bird.glide(); //gliding as always
boat.glide(); //gliding as always

//Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
  let weight = 15;

  this.getWeight = function(){
    return weight;
  };
}

//Understand the Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("A cozy nest is ready");
})();

//Use an IIFE to Create a Module

let isCuteMixin = function (obj){
  obj.isCute = function(){
    return true;
  };
};
let singMixin = function (obj){
  obj.sing = function(){
    console.log("singin is jasdj");
  };
};

//! değişiklik sonrası

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();
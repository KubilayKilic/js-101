class Person {

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName){
    if(typeof newFirstName === "string" && newFirstName.length > 0){
      this._firstName = newFirstName;
    } else {
      console.error("first name must be a non-empty string");
    }
  }

  set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.length > 0){
      this._lastName = newLastName;
    } else {
      console.error("last name must be a non-empty string");
    }
  }

  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    } else {
      console.error("age must be a non-negative number");
    }
  }

  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  get fullName(){
    return this._firstName + " " + this._lastName;
  }

  get age(){
    return this._age;
  }
}

const person = new Person("sponge", "bobsquare", 13);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

class Person2 {

  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  set name (newName){
    if(typeof newName === "string" && newName.length > 0){
      this._name = newName;
    } else {
      console.error("please enter a name that is string")
    }
  }
    set city (newCity){
      if(typeof newCity === "string" && newCity.length > 0){
        this._city = newCity;
      } else {
        console.error("please enter a city that is string")
      }
    }

    set age (newAge){
      if(typeof newAge === "number" && newAge.length > 0){
        this._age = newAge;
      }
    }

  get name (){
    return this._name;
  }

  get city(){
    return this._city;
  }

  get age(){
    return this._age;
  }
}

const person21 = new Person2("abuzer", 41, "istanbul");

console.log(person21.age);
console.log(person21.city);


class User1{
  
  constructor(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  set name(newName){
    if(typeof newName === "string" && newName.length > 0){
      this._name = newName;
    } else {
      console.error("Please enter a string name which has at least 1 cha in it...")
    }
  }

  get name(){
    return this._name;
  }
}

const user = new User1("abuzer", "kadayıf", 41);

console.log(user.name);
console.log(user.lastName);
console.log(user.age);


class User{
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  set (newName){
    if(typeof newName === "string" && newName.length > 0){
      this.name = newName;
    } else {
      console.error("string ve 1 karakter fazla olsun")
    }
  }

  get () {
    return this.name;
  }
}

const user2 = new User ("abuzer", "kadayıf", 41);

console.log(user2.name)

user2.set('berke')

console.log(user2.name)

const name = user2.get();

console.log('name: ' + name)




class Usermesela{

  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }

  set (newUserName){
    if(typeof newUserName === "string"){
      this._name = newUserName;
    } else {
      console.error("zattiri zort");
    }
  }

  get (newUserName){
    return this.name;
  }
}

const person = new Usermesela("abuser", 41, "istanbul" );

console.log(person.name);

Usermesela.set('adamsın');
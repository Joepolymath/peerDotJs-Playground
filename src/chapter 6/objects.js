const human = {
  name: 'Joshua',
  age: 55,
  hairColor: 'black',
  gender: 'male',
  talk: function () {
    console.log(`My name is ${this.name}`);
  },
};

// Functions in an object are called methods.

// human.talk();

// const animals = new Object();
// animals.name = 'Goat';
// console.log(animals);

// 'this' keyword

// What is the difference between arrow functions and the function keyword.
// Arror functions do not have access to the 'this' keyword
// Arrow functions do not have access to the 'arguments' keyword

function Animal() {
  this.name = 'Goat';
  this.isStubborn = true;
  this.color = 'Red';

  this.move = function () {
    console.log('I am moving. hahahaha 🐐');
  };
}

// const animal1 = new Animal();
// console.log(animal1);

function Human(name, nationality) {
  this.hasNose = true;
  this.hasEyes = true;
  let gender = 'Male';
  this.name = name;
  this.nationality = nationality;

  this.getGender = function () {
    console.log(gender);
  };

  this.setGender = function (newGender) {
    gender = newGender;
  };

  this.move = function () {
    console.log('I am moving.');
  };

  this.think = function () {
    console.log(' I am thinking.');
  };
}

Human.prototype.fly = function () {
  console.log('I can fly');
};

Human.prototype.isInvisible = true;
Human.prototype.teleport = function () {
  console.log('I am teleporting');
};

const josh = new Human('Joshua', 'Nigerian');
console.log(josh);
josh.getGender();
josh.setGender('Female');
josh.getGender();
// josh.fly();

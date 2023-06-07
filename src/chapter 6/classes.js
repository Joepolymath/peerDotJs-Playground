class Human {
  // constructors are functions that run immediately after an instance is created
  constructor(name, nationality) {
    this.name = name;
    this.nationality = nationality;
    this.hasNose = true;
    this.hasEyes = true;
  }

  move() {
    console.log('I am moving');
  }
  think() {
    console.log(' I am thinking.');
  }
}

const esther = new Human('Esther', 'Zimbabwe');

esther.think();

function ExampleClass() {
  let name = 'Josh';
  this.age = 13;
  this.saySomething = function () {
    console.log(name);
    console.log(this.age);
  };

  this.getName = function () {
    return name;
  };

  this.setName = function (newName) {
    name = newName;
    return true;
  };
}

const example1 = new ExampleClass();

ExampleClass.prototype.test = function () {
  console.log(this.age, 'Testing...');
};

example1.saySomething();
example1.test();
console.log(example1.setName('Tobi'));
console.log(example1.getName());

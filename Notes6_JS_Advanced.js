//Object
const person = {};
person.firstName = 'John';
person.lastName = 'Doe';

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
const myFather = new Person('John', 'Doe');
myFather.firstName = 'Henry';

//Object Inheritance
Person.prototype.age = 0;
Person.prototype.getAge = function () {
  return this.age;
};
function Student(first, last, age) {
  Person.call(this, first, last);
  this.age = age;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//Function
function sum(...args) {
  for (let arg of args) {
    console.log(arg);
  }
}

function sum2() {
  for (let arg of arguments) {
    console.log(arg);
  }
}

const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};
person.fullName.call(person1);
person.fullName.apply(person1);

//this

//Class
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

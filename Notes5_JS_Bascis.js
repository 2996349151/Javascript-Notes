// Variables
var x;
let y;
x = 5;
y = 6;
let z = x + y;
const a = (z * 5) / 4;
x++;
y += x;
print(typeof x);
print(16 + 4 + 'Volvo');
print('Volvo' + 16 + 4);
y = 123e5;

// Strings
let text = 'We are the so-called "Vikings" from the north.';
let length = text.length;
let char = text.charAt(0);
let letter = text[2];
let part = text.slice(-12, -6);
let text3 = text.toUpperCase();
let text4 = text.concat(' ', text2);
let text5 = text.trim();
let result = text.repeat(2);
let newText = text.replace('Microsoft', 'W3Schools');
text = text.replaceAll('Cats', 'Dogs');
text.split(',');
let index = text.indexOf('locate');
text.search('locate');
text.includes('world');
text.endsWith('Doe');
let text6 = `Welcome ${text2}, ${text3}!`;

let header = 'Template Strings';
let tags = ['template strings', 'javascript', 'es6'];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;

// Function
function myFunction(p1, p2) {
  return p1 * p2;
}

let b = myFunction(x, y);

// Object
let car = { type: 'Fiat', model: 500, color: 'white' };
car.price = 10000;
car.type = 'suv';

let car2 = new Object();

car.fullname = function () {
  return this.type + ' ' + this.model;
};

delete car['price'];

const valuesArray = Object.values(car);

const entitiesArray = Object.entries(car);

// Constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = 'English';
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

// Arrays
const cars = ['Saab', 'Volvo', 'BMW'];
cars[0] = 'Opel';
cars.push('Tesla');
cars.pop();
cars.indexOf('BMW');
cars.sort();
cars.reverse();
cars.forEach((Element) => {
  print(Element);
});
const cars2 = cars1.map((value, index, array) => {
  return value * 2;
});

//Math
let n = 5.23;
Math.round(n);
Math.ceil(n);
Math.floor(n);
Math.random();
Math.sqrt(64);
Math.abs(-5);
Math.max([1, 2, 3]);

// if
let time, greeting;
if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

//switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
  default:
    day = 'none';
}

// loop
for (let i = 0; i < cars.length; i++) {
  print(cars[i]);
}

for (let car in cars) {
  print(car);
}

let i = 0;
while (i < 10) {
  text += 'The number is ' + i;
  i++;
}

const letters = ['a', 'b', 'c'];

for (const l of letters) {
  print(l);
}

// Set
let setty = new Set(['a', 'b', 'c']);
setty.add('d');
setty.has('a');
setty.forEach((value) => {
  print(value);
});

//Map
const fruits = new Map([
  ['apple', 500],
  ['banana', 400],
  ['cherry', 600],
]);
fruits.set('orange', 300);
fruits.get('apple');
fruits.delete('banana');
fruits.has('cherry');
fruits.forEach((value, key) => {
  print(key + ' ' + value);
});
for (const [key, value] of fruits) {
  print(key + ' ' + value);
}

// Export
function eFunction() {
  return 1;
}
export default eFunction;

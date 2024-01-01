const myObject = {
  property: 'Value!',
  otherProperty: 77,
  'obnoxious property': function () {
    // do stuff
  },
};

console.log(myObject['obnoxious property']);
console.log(myObject['property']);

// Object as a design pattern

// example one
const playerOneName = 'Tim';
const playerTwoName = 'Jenn';
const playerOneMarker = 'x';
const playerTwoMarker = 'o';

// example two
const playerOne = { name: 'Tim', marker: 'x' };
const playerTwo = { name: 'Jenn', marker: 'o' };

function gameOver(winningPlayer) {
  console.log('Congratulations!');
  console.log(winningPlayer.name + ' is the winner1');
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log('hello my name is ' + this.name);
  };
}

const player = new Player('steve', 'x');
console.log(player);

player.sayName();

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
  };
}

let bookOne = new Book('The Sanction', 'Benjamin Abolade', 1000)

console.log(bookOne)
console.log(bookOne.info())
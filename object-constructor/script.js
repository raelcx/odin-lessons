// In this lesson, I'm learning about object constructors.
// In the example bellow, I'm creating a constructor that stores
// books and return the book info when bookname.info() is called.

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    this.info = function() {
        let bookReaded = readed == 'yes' ? 'readed' : 'not readed yet';
        console.log(`${title} by ${author}, ${pages} pages, ${bookReaded}.`)
    };
}

let theHobbit;

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
  };
  
  Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
  Object.setPrototypeOf(Player.prototype, Person.prototype);
  Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  
  player1.sayName(); // Hello, I'm steve!
  player2.sayName(); // Hello, I'm also steve!
  
  player1.getMarker(); // My marker is 'X'
  player2.getMarker(); // My marker is 'O'
  
// constructor
function Book(title,author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getName = function(){
        return `Name: ${this.author}`;
    }
}
//-------------------------------- prototype
// getSummery
Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
// getAge
Book.prototype.getAge = function(){
    const date = new Date(); // Date Object
    const age =  date.getFullYear() - this.year;
    return `${this.author} is ${age} years old`;
};
// revise / change years
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
}

// instantiate
const book1 = new Book("BOOK One", "Sandip Deb", "1998");
const book2 = new Book("BOOK Two", "Akash jeswal", "1990");
// logging book1
console.log(book1);
console.log(book1.author);
console.log(book1.getName());
console.log(book1.getSummery());
console.log(book1.getAge());
book1.revise(1997);
console.log(book1);
// logging book2
console.log(book2);
console.log(book2.author);
console.log(book2.getName());
console.log(book2.getSummery());
console.log(book2.getAge());
book2.revise(1996);
console.log(book2);
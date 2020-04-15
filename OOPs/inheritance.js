// constructor
const Book = function(title, author, years){
    this.title = title;
    this.author = author;
    this.years = years;
};
//getSummery
Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} in ${this.years}`;
};

// Magazine constructor
function Magazine(title, author, years, month){
    Book.call(this, title, author, years);

    this.month = month;
}
// inherit prototype
Magazine.prototype = Object.create(Book.prototype);
// instantiate magazine object
const mag1 = new Magazine("Mag1", "john Doe", 1990, "july");
//use magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1); 
console.log(mag1.getSummery());

